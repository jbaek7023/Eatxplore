import React, { Component } from 'react';
import { AppRegistry, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

const routes = ['Home', 'Profile', 'Language Setting'];

// This is a drawer
export default class SideBar extends Component {
  render() {
    const { t, i18n, navigation } = this.props;
    return (
      <Container>
        <Content>
          <Text>This is a drawer</Text>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate('LanguageSetting')}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
