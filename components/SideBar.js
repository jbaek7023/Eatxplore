import React, { Component } from 'react';
import { AppRegistry, Image, StatusBar } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

const routes = ['Home', 'Chat', 'Profile'];

// This is a drawer
export default class SideBar extends Component {
  render() {
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
                  onPress={() => this.props.navigation.navigate(data)}>
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
