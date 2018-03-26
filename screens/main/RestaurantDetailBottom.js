import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '../../assets/icons';
import { Tab, Tabs } from 'native-base';
import { MenuDetail } from "./MenuDetail";
import axios from 'axios';

class RestaurantDetailBottom extends Component {
  state = { menu: [] };

  componentWillMount() {
    console.log(this.props.restaurant.name);
    var menu = require('../../data/menu');
    this.setState( { menu });

    // axios.get('https://developers.zomato.com/api/v2.1/restaurant?', {
    //   headers: {
    //     'user-key': '31891738c44eba1f07cc87fd4d387df9'
    //   },
    //   params: {
    //     res_id: this.props.restaurant.id
    //   }
    // }).then((response) => {
    //   if (response) {
    //     console.log(response.data);
    //     // const restaurants = response.data["restaurants"];
    //     // this.setState({ restaurants });
    //   }
    // }).catch(function (error) {
    //   console.log(error)
    // });
  }

  _renderItem = ({item}) => {
    return (
        <MenuDetail key={item.id} menu={item}/>
    );
  };

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
        <Tabs initialPage={0}
              tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
          <Tab
              heading="Recommendations"
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
              textStyle={styles.textStyle}>
            <View style={styles.recommendationContainer}>
              <Text style={styles.titleFont}>Recommendations</Text>
              <Text style={styles.subTitleFont}>What Chinese People Like</Text>
              <Text>Based on your nationality</Text>
              <FlatList
                  data={this.state.menu[0]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
              <Text style={styles.subTitleFont}> What Mexican People Like</Text>
              <Text>{"Based on restaurant's nationality"}</Text>
              <FlatList
                  data={this.state.menu[1]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
            </View>
          </Tab>
          <Tab
              heading="Full Menu"
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
              textStyle={styles.textStyle}>
            <View style={styles.fullmenuContainer}>
              <Text style={styles.titleFont}>Full Menu</Text>
              <Text style={styles.subTitleFont}>Antojitos (Appetizers)</Text>
              <FlatList
                  data={this.state.menu[2]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
            </View>
          </Tab>
        </Tabs>
    );
  }

}

const styles = StyleSheet.create({
  recommendationContainer: {
    padding: 10,
  },
  fullmenuContainer: {
    padding: 10,
  },
  titleFont: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitleFont: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  tabStyle : {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 120,
  },
  activeTabStyle: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: "#6d6d6d",
    fontSize: 14
  },
  activeTextStyle: {
    color: 'black',
    fontSize: 14
  },
  tabBarUnderlineStyle: {
    backgroundColor: 'black',
    height: 2
  },
});

export { RestaurantDetailBottom };
