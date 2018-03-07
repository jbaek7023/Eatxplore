import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class Header extends Component {
  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
        <View style={styles.viewStyle}>

          <View style={styles.spaceStyle}>
            <TouchableWithoutFeedback onPress={()=>{this._drawerToggle()}}>
              <Icon name="menu"/>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.spaceStyle}>
            <Text style={styles.textStyle}>{this.props.headerText}</Text>
          </View>
          <View style={styles.spaceStyle} />
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
    height: 60,
    paddingTop: 30,
    paddingBottom: 15,
    paddingLeft:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2
  },
  spaceStyle: {
    flex: 1
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
