import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native';
import { H1, H2, H3 } from 'native-base';
import  RestaurantDetail from "./RestaurantDetail";
import Header from '../../components/Header';

class RestaurantList extends Component {
  static navigationOptions = {
    title: 'List',
  };

  state = { restaurants: [] };

  componentWillMount() {
    var restaurants = require('../../data/restaurants');
    this.setState( { restaurants });
  }

  _renderItem = ({item}) => {
    return (
      <RestaurantDetail key={item.id} restaurant={item} navigation={this.props.navigation}/>
    );
  }

  _keyExtractor = (item, index) => item.id;

  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    let { restaurants } = this.state;
    if (restaurants) {
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
              <Text>Based on your location</Text>
            </View>
            <FlatList
              data={restaurants}
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


export default RestaurantList;
