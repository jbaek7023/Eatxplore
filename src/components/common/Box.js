import React from 'react';
import { View } from 'react-native';

const Box = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    // Border
    borderWidth: 1,
    borderRadius: 2, // Rounded Corner
    borderColor: '#ddd',
    borderBottomWidth: 0,

    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 1,

    // Margin
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10
  }
};

export { Box };