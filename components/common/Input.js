import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, disableLabel, secureTextEntry }) => {
  const { inputTextStyle, containerStyle } = styles;

  return (
      <View style = { containerStyle }>
        <TextInput
            label = {label}
            value={ value }
            onChangeText={ onChangeText }
            placeholder={ placeholder}
            disableLabel = {disableLabel}
            secureTextEntry = { secureTextEntry }
            autoCorrect={ false }
            style={ inputTextStyle }
        />
      </View>
  );
};

const styles = {
  inputTextStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export { Input };