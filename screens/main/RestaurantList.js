import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import { RestaurantDetail } from "./RestaurantDetail";
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
      <RestaurantDetail key={item.id} restaurant={item}/>
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
            headerText="Restaurant List"
            navigation={this.props.navigation}
            drawerToggle={this._drawerToggle}
            />
          <ScrollView>
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

export default RestaurantList;
