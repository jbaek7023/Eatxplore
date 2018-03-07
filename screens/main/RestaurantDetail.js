import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Box, BoxElement } from '../../components/common';
import { Icon } from 'native-base';
import { FontAwesome } from '../../assets/icons';

class RestaurantDetail extends Component {
  _pressItem = () => {
    this.props.navigation.navigate('MenuList');
  }

  render() {
    const { name, type, distance, image } = this.props.restaurant;
    const { headerContentStyle } = styles;

    return (
      <View style={styles.restaurantBoxStyle}>
        <TouchableOpacity style={styles.imageContainer} onPress={()=>{this._pressItem()}}>
          <Image
            style={styles.imageStyle}
            source={{uri: image}}
          />
        </TouchableOpacity>
        <View style={styles.restaurantBottomContainer}>
          <View style={styles.restaurantLeftContainer}>
            <Text style={styles.restaurantTitle}>{ name }</Text>
            <Text style={styles.restaurantKind}>{ type }</Text>
          </View>
          <View style={styles.restaurantRightContainer}>
            <Text><Text style={styles.awesome}>{FontAwesome.place}</Text> { distance } miles</Text>
          </View>
        </View>
      </View>

    );
  }
}

const styles = {
  restaurantLeftContainer: {
    paddingLeft: 15,
  },
  restaurantRightContainer: {
    paddingRight: 15,
  },
  restaurantTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  restaurantKind: {
    fontSize: 15,
  },
  awesome : {
    fontFamily: 'fontawesome'
  },
  restaurantBoxStyle: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  restaurantBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
    flex: 1,
    margin: 1,
  },
  imageStyle: {
    width: null,
    height: 200,
    resizeMode: 'center',
    opacity: 1,
  }
};

export default RestaurantDetail ;
