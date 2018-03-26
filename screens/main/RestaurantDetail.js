import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native';
import { Tab, Tabs } from 'native-base'
import RestaurantListItem from "./RestaurantListItem";
import { RestaurantDetailTop } from './RestaurantDetailTop';
import { RestaurantDetailBottom } from './RestaurantDetailBottom';
import Header from '../../components/Header';

class RestaurantDetail extends Component {
  static navigationOptions = {
    title: 'List',
  };

  state = { menu: [] };

  componentWillMount() {
    var menu = require('../../data/menu');
    this.setState({ menu });
  }

  _renderItem = ({item}) => {
    return (
      <RestaurantListItem key={item.id} restaurant={item} navigation={this.props.navigation}/>
    );
  }

  _keyExtractor = (item, index) => item.id;

  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    let { restaurant } = this.props.navigation.state.params;
    let { menu } = this.state;
    if (menu) {
      return (
        <View style={{flex:1, backgroundColor: 'white'}}>
          <Header
            headerText={restaurant.name}
            navigation={this.props.navigation}
            drawerToggle={this._drawerToggle}
            back={true}
          />
          <ScrollView style={styles.listContainer}>
            <RestaurantDetailTop restaurant={restaurant}/>
            <RestaurantDetailBottom restaurant={restaurant}/>
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

export default RestaurantDetail;
