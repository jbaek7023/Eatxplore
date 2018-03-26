import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { H1, H2, H3 } from 'native-base';
import RestaurantListItem from "./RestaurantListItem";
import Header from '../../components/Header';
import axios from 'axios';
import {FontAwesome} from "../../assets/icons";

class MenuDetail extends Component {
  static navigationOptions = {
    title: 'Menu',
  };

  // _renderItem = ({item}) => {
  //   return (
  //       // <RestaurantListItem key={item.restaurant.id} restaurant={item} navigation={this.props.navigation}/>
  //       <RestaurantListItem key={item.id} restaurant={item} navigation={this.props.navigation}/>
  //   );
  // }

  // _keyExtractor = (item, index) => item.id;


  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    let { menu } = this.props.navigation.state.params;
    console.log(menu);
    if (menu) {
      return (
          <View style={{flex:1, backgroundColor: 'white'}}>
            <Header
                headerText={menu.name}
                navigation={this.props.navigation}
                drawerToggle={this._drawerToggle}
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
                  <Text><Text style={styles.awesome}>{FontAwesome.thumbsUp}</Text> Liked by 2 people</Text>
                  <View>
                    <Text style={styles.descriptionStyle}>{menu.description}</Text>
                  </View>
                  <Text>Add a review</Text>

                </View>

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
