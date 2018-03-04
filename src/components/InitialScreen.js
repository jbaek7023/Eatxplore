import React, { Component } from 'react';
import { Picker } from 'react-native'
import { Input, Button, Box, BoxElement, Dropdown } from "./common/index";

class InitialScreen extends Component {
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

  componentWillMount() {
    var natls = require('../../data/nationalities');
    var langs = require('../../data/languages');
    var rests = require('../../data/restrictions');
    this.setState({ nationalities: natls, languages: langs, restrictions: rests, nationality: natls[0] });
  }

  render() {
    return (
      <Box>
        <BoxElement>
          <Input
              placeholder="Username"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
          />
        </BoxElement>

        <BoxElement>
          <Dropdown
            value={this.state.nationality}
            onValueChage={nationality => this.state({ nationality })}
          >
            {this.state.nationalities.map((natl) => {
              return <Picker.Item label = {natl} value = {natl} key = {natl} />
            })}
          </Dropdown>
        </BoxElement>

        <BoxElement>
          <Dropdown
              value={this.state.language}
              onValueChage={language => this.state({ language })}
          >
            {this.state.languages.map((lang) => {
              return <Picker.Item label = {lang.name} value = {lang.name} key = {lang.name} />
            })}
          </Dropdown>
        </BoxElement>

        <BoxElement>
          <Dropdown
              value={this.state.restriction}
              onValueChage={restriction => this.state({ restriction })}
          >
            {this.state.restrictions.map((rest) => {
              return <Picker.Item label = {rest} value = {rest} key = {rest} />
            })}
          </Dropdown>
        </BoxElement>

        <BoxElement>
          <Button onPress={() => console.log(this.state.username) }>
            Start Exploring Food!
          </Button>
        </BoxElement>

      </Box>
    );
  }
}

export { InitialScreen };