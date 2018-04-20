import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '../../assets/icons';
import { Tab, Tabs } from 'native-base';
import { MenuListItem } from "./MenuListItem";
import axios from 'axios';

class RestaurantDetailBottom extends Component {
  state = { menu: [] };

  async componentWillMount() {
    // console.log(this.props.restaurant.name);


    //const ROOT_URL = 'http://127.0.0.1:8000';
    const ROOT_URL = 'https://stormy-eyrie-49981.herokuapp.com';
    try {
      let response = await axios.get(`${ROOT_URL}/restaurants/detail/${this.props.restaurant.id}/`);
      if(response.status==200) {
        console.log(response.data)
        console.log(response.data.menus)
        this.setState({menu: response.data.menus})
      } else {
        console.log('err')
      }
    } catch(e) {
      console.log(e)
    }
    //var menu = require('../../data/menu');
    //this.setState( { menu });
  }



  _renderItem = ({item}) => {
    let { t, i18n, navigation } = this.props;
    return (
        <MenuListItem key={item.id} menu={item} navigation={this.props.navigation} t={t} i18n={i18n}/>
    );
  };

  _keyExtractor = (item, index) => item.id;

  render() {
    let { t, i18n, navigation } = this.props;
    // {t('rl:ymba', { lng: i18n.language })}
    return (
        <Tabs initialPage={0}
              tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
          <Tab
              heading={t('ml:recm', { lng: i18n.language })}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
              textStyle={styles.textStyle}>
            <View style={styles.recommendationContainer}>
              <Text style={styles.titleFont}>{t('ml:recm', { lng: i18n.language })}</Text>
              <Text style={styles.subTitleFont}>{t('ml:your', { lng: i18n.language })}</Text>
              <Text>{t('ml:boyn', { lng: i18n.language })}</Text>
              <FlatList
                  data={this.state.menu.slice(3,5)}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
              <Text style={styles.subTitleFont}> {t('ml:mexc', { lng: i18n.language })}</Text>
              <Text>{t('ml:born', { lng: i18n.language })}</Text>
              <FlatList
                  data={this.state.menu.slice(5,7)}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
            </View>
          </Tab>
          <Tab
              heading={t('ml:fm', { lng: i18n.language })}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
              textStyle={styles.textStyle}>
            <View style={styles.fullmenuContainer}>
              <Text style={styles.titleFont}>{t('ml:fm', { lng: i18n.language })}</Text>
              <FlatList
                  data={this.state.menu}
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
