import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

class Header extends Component {
  render() {
    let { back } = this.props;
    if(back) {
      return (
        <View style={styles.viewStyle}>
          <View style={styles.hamburgerStyle}>
            <TouchableWithoutFeedback onPress={()=>{this.props.navigation.goBack()}}>
              <Ionicons name="ios-arrow-back" size={32}/>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.centerTitleStyle}>
            <Text style={styles.textStyle}>{this.props.headerText}</Text>
          </View>
          <View style={styles.searchStyle}>
            <Icon name="search"/>
          </View>
        </View>
      );
    }
    return (
        <View style={styles.viewStyle}>
          <View style={styles.hamburgerStyle}>
            <TouchableWithoutFeedback onPress={()=>{this.props.drawerToggle()}}>
              <Icon name="menu"/>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.centerTitleStyle}>
            <Text style={styles.textStyle}>{this.props.headerText}</Text>
          </View>
          <View style={styles.searchStyle}>
            <Icon name="search"/>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection:'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2
  },
  hamburgerStyle: {
    flex:1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  centerTitleStyle: {
    flex:4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  searchStyle: {
    flex:1,
    alignItems: "flex-end",
    paddingRight: 15,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
