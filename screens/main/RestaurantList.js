import React, { Component } from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { RestaurantDetail } from "./RestaurantDetail";
import { Header } from '../../components/common'

class RestaurantList extends Component {
  static navigationOptions = {
    title: 'List',
    header: {
      visible: true
    },
    initialRouteName: 'SecondScreen',
    headerMode: 'screen',
    headerTitle: 'Second Screen Header',
    drawerLabel: 'Second Screen',
  };

  state = { restaurants: [] };

  componentWillMount() {
    var restaurants = require('../../data/restaurants');
    this.setState( { restaurants });
  }

  _renderItem = ({item}) => {
    return (
      <RestaurantDetail key={item.id} restaurant={item} />
    );
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    let { restaurants } = this.state;
    return (
      <View style={{flex:1}}>
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
}

export default RestaurantList;
