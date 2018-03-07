import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableWithoutFeedback onPress={()=>{this.props.drawerToggle()}}>
          <Icon name="menu"/>
        </TouchableWithoutFeedback>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 30,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
