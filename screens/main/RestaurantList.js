import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { H1, H2, H3 } from 'native-base';
import RestaurantListItem from "./RestaurantListItem";
import Header from '../../components/Header';
import { Loc } from 'redux-react-native-i18n'
import axios from 'axios';
import { connect } from 'react-redux';
import { Constants, Location, Permissions } from 'expo';

import { translate } from 'react-i18next';
@translate(['home', 'common'], { wait: true })

class RestaurantList extends Component {
  static navigationOptions = {
    title: 'List',
  };

  state = { restaurants: [], location: null };


  async componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }

    //const ROOT_URL = 'http://127.0.0.1:8000';
    const ROOT_URL = 'https://stormy-eyrie-49981.herokuapp.com';
    try {
      let response = await axios.get(`${ROOT_URL}/restaurants/list/`);
      if(response.status==200) {

        this.setState({restaurants: response.data})
      } else {
        console.log('err')
      }
    } catch(e) {
        console.log(e)
    }

    //var restaurants = require('../../data/restaurants');
    //this.setState( { restaurants });
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  _renderItem = ({item}) => {
    let {longitude, latitude } = this.state.location.coords;
    let distance = 0;
    //distance
    if(longitude != null && latitude !=null) {
      distance = getDistanceFromLatLonInKm(latitude, longitude, item.latitude, item.longitude)
      if (distance > 1000) {
        distance = 1.1;
      }

    }
    return (
      // <RestaurantListItem key={item.restaurant.id} restaurant={item} navigation={this.props.navigation}/>
      <RestaurantListItem key={item.id} distance={distance.toFixed(1)} restaurant={item} navigation={this.props.navigation} {...this.props}/>
    );
  }

  // _keyExtractor = (item, index) => item.restaurant.i
  _keyExtractor = (item, index) => item.id;


  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {


    const { t, i18n, navigation } = this.props;
    if (this.state.restaurants) {
      return (
        <View style={{flex:1}}>
          <Header
            headerText="Eatsplore"
            navigation={this.props.navigation}
            drawerToggle={this._drawerToggle}
          />
          <ScrollView style={styles.listContainer}>
            <View style={styles.locationTitleContainer}>
              <H2 style={styles.locationTitle}>{t('rl:ymba', { lng: i18n.language })}</H2>
              <H3>{t('rl:boycl', { lng: i18n.language })}</H3>


            </View>
            <FlatList
              data={this.state.restaurants}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </ScrollView>
        </View>
      );
    }
    return <View/>;
  }
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
  ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d / 1.6;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


const styles = StyleSheet.create({
  locationTitleContainer: {
    padding: 15,
    paddingTop: 25,
    paddingBottom: 0,
  },
  locationTitle: {
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
  },
});

const mapStateToProps = ( { i18n: { currentLanguage, dictionaries } }, ownProps ) => ({
    currentLanguage,
    dictionary: dictionaries[ currentLanguage ]
})

export default RestaurantList;
