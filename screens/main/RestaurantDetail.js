import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Box, BoxElement } from '../../components/common';

const RestaurantDetail = ({ restaurant }) => {
  const { name, type, distance, image } = restaurant;
  const { headerContentStyle, leftMost, rightMost, imageStyle } = styles;

  return (
      <Box>
        <BoxElement>
          <TouchableOpacity onPress={() => {console.log(name)}}>
            <Image
              style={ imageStyle }
              source={ {uri: image} }
            />
          </TouchableOpacity>
        </BoxElement>

        <BoxElement>
          <View style={ headerContentStyle }>
            <Text>{ name }</Text>
            <Text>{ distance } miles</Text>
          </View>
        </BoxElement>

        <BoxElement>
          <View style={ headerContentStyle }>
            <Text>{ type }</Text>
          </View>
        </BoxElement>

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

export { RestaurantDetail };
