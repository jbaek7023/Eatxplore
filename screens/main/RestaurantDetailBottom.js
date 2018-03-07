import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '../../assets/icons';
import { Tab, Tabs } from 'native-base'
import MenuList from './MenuList';
import {MenuDetail} from "./MenuDetail";

class RestaurantDetailBottom extends Component {
  state = { menu: [] };

  componentWillMount() {
    var menu = require('../../data/menu');
    this.setState( { menu });
  }

  _renderItem = ({item}) => {
    return (
        <MenuDetail key={item.id} menu={item}/>
    );
  }

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
            <MenuList>
              <Text style={{fontSize: 40}}>Recommendations</Text>
              <Text style={{fontSize: 25}}> What Chinese People Like</Text>
              <Text style={{fontSize: 20}}> Based on your nationality</Text>
              <FlatList
                  data={this.state.menu[0]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
              <Text style={{fontSize: 25}}> What Mexican People Like</Text>
              <Text style={{fontSize: 20}}> Based on restaurant's nationality</Text>
              <FlatList
                  data={this.state.menu[1]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
            </MenuList>
          </Tab>
          <Tab
              heading="Full Menu"
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
              textStyle={styles.textStyle}>
            <MenuList>
              <Text style={{fontSize: 40}}>Full Menu</Text>
              <FlatList
                  data={this.state.menu[2]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
            </MenuList>
          </Tab>
        </Tabs>
    );
  }

}

const styles = StyleSheet.create({
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
