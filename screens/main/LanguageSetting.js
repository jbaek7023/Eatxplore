import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { H1, H2, H3 } from 'native-base';
import RestaurantListItem from "./RestaurantListItem";
import Header from '../../components/Header';
import { Loc } from 'redux-react-native-i18n'
import axios from 'axios';
import { connect } from 'react-redux';

import { translate } from 'react-i18next';
@translate(['home', 'common'], { wait: true })
class RestaurantList extends Component {
  static navigationOptions = {
    title: 'List',
  };

  state = { };

  componentWillMount() {


  }

  // _keyExtractor = (item, index) => item.restaurant.i
  _keyExtractor = (item, index) => item.id;


  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  _changeLanguage = (lanType) => {
    this.props.i18n.changeLanguage(lanType)
    this.props.navigation.navigate('RestaurantList');
  }



  render() {
    const { t, i18n, navigation } = this.props;


    return (
      <View style={{flex:1}}>
        <Header
          headerText="Language Setting"
          navigation={this.props.navigation}
          drawerToggle={this._drawerToggle}
        />
        <View>
          <TouchableOpacity onPress={()=> this._changeLanguage('en')}>
            <Text>Translate to English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this._changeLanguage('es')}>
            <Text>Translate to Spanish</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this._changeLanguage('ko')}>
            <Text>Translate to Korean</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this._changeLanguage('ch')}>
            <Text>Translate to Chinese</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

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

const mapStateToProps = ( { i18n: { currentLanguage, dictionaries } }, ownProps ) => ({
    currentLanguage,
    dictionary: dictionaries[ currentLanguage ]
})

export default RestaurantList;
