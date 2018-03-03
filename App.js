import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Input } from './src/components/common';
import InitialScreen from "./src/components/InitialScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={ {flex: 1}}>
        <Header headerText={'Stunner'} />
        <InitialScreen />
      </View>
    );
  }
}
