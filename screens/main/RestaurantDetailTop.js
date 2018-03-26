import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '../../assets/icons';

const RestaurantDetailTop = ({ restaurant }) => {
  const { name, cuisines, distance, image } = restaurant;

  return (
    <View style={styles.restaurantBoxStyle}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{uri: image}}
        />
      </View>
      <View style={styles.restaurantBottomContainer}>
        <View style={styles.restaurantLeftContainer}>
          <Text style={styles.restaurantTitle}>{ name }</Text>
          <Text style={styles.restaurantKind}>{ cuisines }</Text>
        </View>
        <View style={styles.restaurantRightContainer}>
          <Text><Text style={styles.awesome}>{FontAwesome.place}</Text> { distance } miles</Text>
        </View>
      </View>
    </View>
  );
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

  },
  restaurantBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  imageContainer: {
    height: 150,
    flex: 1,
    margin: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  imageStyle: {
    width: null,
    height: 150,
    resizeMode: 'center',
    opacity: 1,
  }
};

export { RestaurantDetailTop };
