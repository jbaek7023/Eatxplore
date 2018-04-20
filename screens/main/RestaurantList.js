import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { H1, H2, H3 } from 'native-base';
import RestaurantListItem from "./RestaurantListItem";
import Header from '../../components/Header';
import { Loc } from 'redux-react-native-i18n'
import axios from 'axios';
import { connect } from 'react-redux';

import { translate } from 'react-i18next';
@translate(['home', 'common'], { wait: true })
class RestaurantList extends Component {
  static navigationOptions = {
    title: 'List',
  };

  state = { restaurants: [] };

  componentWillMount() {
    // axios.get('https://developers.zomato.com/api/v2.1/search?', {
    //   headers: {
    //     'user-key': '31891738c44eba1f07cc87fd4d387df9'
    //   },
    //   params: {
    //     count: 3,
    //     lat: 33.7749,
    //     lon: -84.3964,
    //     sort: 'real_distance'
    //   }
    // }).then((response) => {
    //   if (response) {
    //     const restaurants = response.data["restaurants"];
    //     this.setState({ restaurants });
    //   }
    // }).catch(function (error) {
    //   console.log(error)
    // });
    // axios.get('https://api.foursquare.com/v2/venues/search?', {
    //   params: {
    //     client_id: 'VU5DQQC2SLDQBGAPDG3OC50YJO5AJRO1JWACO1BSFW4M25UL',
    //     client_secret: 'TC1P2JQA4NP0OKUBXDZPITHJCT2WI020EYRDKNVRMYKOMTRV',
    //     ll: '33.7749,-84.3964',
    //     intent:'browse',
    //     radius: 250,
    //     limit: 5,
    //     categoryId: '4d4b7105d754a06374d81259',
    //     v: '20180326'
    //   }
    // }).then((response) => {
    //   console.log(response.data.response.venues);
    // }).catch(function (error) {
    //   console.log(error)
    // });
    var restaurants = require('../../data/restaurants');
    this.setState( { restaurants });
  }

  _renderItem = ({item}) => {
    return (
      // <RestaurantListItem key={item.restaurant.id} restaurant={item} navigation={this.props.navigation}/>
      <RestaurantListItem key={item.id} restaurant={item} navigation={this.props.navigation}/>
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
            headerText="App Name"
            navigation={this.props.navigation}
            drawerToggle={this._drawerToggle}
          />
          <ScrollView style={styles.listContainer}>
            <View style={styles.locationTitleContainer}>
              <H2 style={styles.locationTitle}>You Might Be At...</H2>
              <H3>{t('home:title', { lng: i18n.language })}</H3>
              <H3>{t('home:oh', { lng: i18n.language })}</H3>


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
