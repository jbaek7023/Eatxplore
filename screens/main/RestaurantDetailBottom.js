import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '../../assets/icons';
import { Tab, Tabs } from 'native-base'
import MenuList from './MenuList';

const RestaurantDetailBottom = ({ restaurant }) => {
  return (
    <Tabs initialPage={0}
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
      <Tab
        heading="Recommendations"
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.activeTextStyle}
        textStyle={styles.textStyle}>
        <MenuList />
      </Tab>
      <Tab
        heading="Full Menu"
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.activeTextStyle}
        textStyle={styles.textStyle}>
        <View><Text>Menu Detail</Text></View>
      </Tab>
    </Tabs>
  );
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
