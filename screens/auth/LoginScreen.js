import React, { Component } from 'react';
import { View } from 'react-native';
import { Picker, Item } from 'native-base';
import Header from '../../components/Header';
import { Input, Button, Box, BoxElement } from "../../components/common/index";

class LoginScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      nationality: '',
      language: '',
      restriction: '',
      nationalities: [],
      languages: [],
      restrictions: []
    };
  }

  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  componentWillMount() {
    var natls = require('../../data/nationalities');
    var langs = require('../../data/languages');
    var rests = require('../../data/restrictions');
    this.setState({ nationalities: natls, languages: langs, restrictions: rests, nationality: natls[0], language: langs[0].name, restriction: rests[0] });
  }

  render() {
    return (
        <View>
          <Header
              headerText="App Name"
              navigation={this.props.navigation}
              drawerToggle={this._drawerToggle}/>
          <Box>
            <BoxElement>
              <Input
                  placeholder="Username"
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
              />
            </BoxElement>
            <BoxElement>
              <Picker
                iosHeader="Select Nationality"
                mode="dropdown"
                selectedValue={this.state.nationality}
                onValueChange={nationality => this.setState({ nationality })}>
                {this.state.nationalities.map((natl) => {
                  return <Item label = {natl} value = {natl} key = {natl} />
                })}
              </Picker>
            </BoxElement>

            <BoxElement>
              <Picker
                  iosHeader="Select Language"
                  mode="dropdown"
                  selectedValue={this.state.language}
                  onValueChange={language => this.setState({ language })}>
                {this.state.languages.map((lang) => {
                  return <Item label = {lang.name} value = {lang.name} key = {lang.code} />
                })}
              </Picker>
            </BoxElement>

            <BoxElement>
              <Picker
                  iosHeader="Select Dietary Restriction"
                  mode="dropdown"
                  selectedValue={this.state.restriction}
                  onValueChange={restriction => this.setState({ restriction })}>
                {this.state.restrictions.map((rest) => {
                  return <Item label = {rest} value = {rest} key = {rest} />
                })}
              </Picker>
            </BoxElement>

            <BoxElement>
              <Button onPress={() => this.props.navigation.navigate('RestaurantList') }>
                Start Exploring Food!
              </Button>
            </BoxElement>

          </Box>
        </View>
    );
  }
}

export default LoginScreen;
