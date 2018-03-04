import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { RestaurantDetail } from "./RestaurantDetail";

class RestaurantList extends Component {
  state = { restaurants: [] };

  componentWillMount() {
    var restaurants = require('../../data/restaurants');
    this.setState( { restaurants });
  }

  renderRestaurants() {
    return this.state.restaurants.map(restaurant =>
        <RestaurantDetail key={restaurant.name} restaurant={restaurant} />
    );
  }

  render() {
    return (
        <ScrollView>
          { this.renderRestaurants() }
        </ScrollView>
    );
  }
}

export { RestaurantList };