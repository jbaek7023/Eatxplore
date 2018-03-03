import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Box, BoxElement, Dropdown, Input } from "./common/index";

class InitialScreen extends Component {
  state = { username: '', nationality: '', language: '', restriction: '',
            nationalities: [], languages: [], restrictions: []
          };

  componentWillMount() {
  //   var data1 = require('../../data/nationalities.json');
  //   var data2 = require('../../data/languages.json');
  //   var data3 = require('../../data/restrictions.json');
  //   this.setState( {nationalities: data1, languages: data2, restrictions: data3} )
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
          <Input
              placeholder="Nationality"
              value={this.state.nationality}
              onChangeText={nationality => this.setState({ nationality })}
          />
        </BoxElement>
        <BoxElement>
          <Input
              placeholder="Language"
              value={this.state.language}
              onChangeText={language => this.setState({ language })}
          />
        </BoxElement>
        <BoxElement>
          <Input
              placeholder="Restrictions"
              value={this.state.restriction}
              onChangeText={restriction => this.setState({ restriction })}
          />
        </BoxElement>
      </Box>
    );
  }
}

export default InitialScreen;