import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import { MenuDetail } from "./MenuDetail";
import Header from '../../components/Header';

const MenuList = (props) => {
  return (
      <View style={ {flex: 1}}>
        {props.children}
      </View>
  )
};
export default MenuList;
