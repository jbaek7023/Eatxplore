import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Box, BoxElement } from '../../components/common';

const RestaurantDetail = ({ restaurant }) => {
  const { name, type, distance, image } = restaurant;
  const { headerContentStyle, headerTextStyle, imageStyle } = styles;

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
            <Text style={headerTextStyle}>{ name }</Text>
            <Text style={headerTextStyle}>{ distance } miles</Text>
          </View>
        </BoxElement>

        <BoxElement>
          <View style={ headerContentStyle }>
            <Text style={headerTextStyle}>{ type }</Text>
          </View>
        </BoxElement>

      </Box>
  );
}

const styles = {
  headerContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export { RestaurantDetail };
