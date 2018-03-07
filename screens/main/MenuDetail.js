import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Box, BoxElement } from '../../components/common';

const MenuDetail = ({ menu }) => {
  const { name, type, price, description, image } = menu;
  const { imageStyle } = styles

  return (
      <Box>
        <TouchableOpacity>
          <View style={ {flex: 1, flexDirection: 'row'}}>

            <View style={ {flex: 1} }>
                <Image
                  style={ imageStyle }
                  source={ {uri: image} }
                />
            </View>
            <View style={ {flex: 3} }>
                <View style={ {flex: 1, flexDirection: 'column' }}>
                  <Text>{ name }</Text>
                  <Text>{ price }</Text>
                </View>
                <View style={ {flex: 1} }>
                  <Text>{ type }</Text>
                </View>
                <View style={ {flex: 2} }>
                  <Text>{ description }</Text>
                </View>
            </View>
          </View>
        </TouchableOpacity>
      </Box>
  );
}

const styles = {
  headerContentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export { MenuDetail };
