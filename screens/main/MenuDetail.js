import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { H1, H2, H3 } from 'native-base';
import RestaurantListItem from "./RestaurantListItem";
import Header from '../../components/Header';
import axios from 'axios';
import {FontAwesome} from "../../assets/icons";
import ReviewListItem from "./ReviewListItem";


class MenuDetail extends Component {
  static navigationOptions = {
    title: 'Menu',
  };

  state = { reviews: [] };

  componentWillMount () {
    var reviews = require('../../data/reviews');
    this.setState({ reviews });
  };


  _renderItem = ({item}) => {
    return (
        <ReviewListItem key={item.id} review={item} navigation={this.props.navigation}/>
        // <RestaurantListItem key={item.id} restaurant={item} navigation={this.props.navigation}/>
    );
  }

  _keyExtractor = (item, index) => item.id;


  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    let { menu } = this.props.navigation.state.params;
    const { t, i18n } = this.props.navigation.state.params;
    if (menu) {
      return (
          <View style={{flex:1, backgroundColor: 'white'}}>
            <Header
                headerText={menu.name}
                navigation={this.props.navigation}
                drawerToggle={this._drawerToggle}
                back={true}
            />
            <ScrollView style={styles.listContainer}>
              <View style={styles.menuContainer}>
                <View style={styles.menuImageContainer}>
                  <Image
                      style={styles.menuImageStyle}
                      source={{uri: menu.image}}/>
                </View>
                <View style={styles.menuContentContainer}>

                  <H3 style={{fontWeight: 'bold'}}>{menu.name}</H3>
                  <Text><Text style={styles.awesome}>{FontAwesome.thumbsUp}</Text> {t('md:like', { lng: i18n.language })} 2</Text>
                  <View>
                    <Text style={styles.descriptionStyle}>{menu.description}</Text>
                  </View>
                  <Text>{t('md:review', { lng: i18n.language })}</Text>
                </View>
              </View>
              <View>
                <FlatList
                  data={this.state.reviews}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                />
              </View>
            </ScrollView>
          </View>
      );
    }
    {/*<View style={styles.locationTitleContainer}>*/}
      {/*<H2 style={styles.locationTitle}>You Might Be At...</H2>*/}
      {/*<Text>Based on your location</Text>*/}
    {/*</View>*/}
    {/*<FlatList*/}
    {/*data={this.state.restaurants}*/}
    {/*keyExtractor={this._keyExtractor}*/}
    {/*renderItem={this._renderItem}*/}
    {/*/>*/}
    return <View/>;
  }
}

const styles = StyleSheet.create({
  // locationTitleContainer: {
  //   padding: 15,
  //   paddingTop: 25,
  //   paddingBottom: 0,
  // },
  // locationTitle: {
  //   fontWeight: 'bold',
  // },
  // listContainer: {
  //   backgroundColor: '#FFFFFF',
  // },
  menuContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 150,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  menuImageContainer: {
    width: 140,
    height: 140,
  },
  menuImageStyle: {
    width: 130,
    height: 130,
    margin: 5,
  },
  menuContentContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  awesome : {
    fontFamily: 'fontawesome'
  },
  descriptionStyle: {
    textDecorationLine: 'underline',
  },
});


export default MenuDetail;
