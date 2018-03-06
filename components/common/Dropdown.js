import React from 'react';
import { Picker, View } from 'react-native';

const Dropdown = ({children, value, onValueChange}) => {
  const { containerStyle, pickerStyle } = styles;

  return (
      <View style = { containerStyle }>
        <Picker
            style={ pickerStyle }
            selectedValue={ value }
            onValueChange={ onValueChange }>
          {children}
        </Picker>
      </View>
  );
};

const styles = {
  pickerStyle: {
    alignSelf: 'stretch',
    paddingRight: 5,
    paddingLeft: 5,
    height: 23,
    borderWidth: 1,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export { Dropdown };