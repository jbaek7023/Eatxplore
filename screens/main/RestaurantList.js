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
      <RestaurantDetail key={item.id} restaurant={item} navigation={this.props.navigation}/>
    );
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    let { restaurants } = this.state;
    if (restaurants) {
      return (
        <View style={{flex:1}}>
          <Header headerText="Restaurant List"/>
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
    // Loading screen later
    return <View/>;
  }
}

export default RestaurantList;
