import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { H2, H3 } from 'native-base';

const MenuListItem = ({ menu, navigation }) => {
  const { name, type, price, description, image } = menu;
  const { imageStyle } = styles;

  _pressItem = (menu) => {
    // console.log(this);
    navigation.navigate('MenuDetail', {menu});
  };

  return (
    <TouchableOpacity style={styles.menuItemContainer} onPress={ () => this._pressItem(menu) }>
      <View style={styles.imageContainer}>
        <Image
          style={ imageStyle }
          source={{uri: image}}/>
      </View>
      <View style={styles.textContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <H3 style={{fontWeight: 'bold'}}>{ name }</H3>
          <Text style={{marginRight: 20}}>$ {price}</Text>
        </View>
        <View style={{marginBottom: 5}}>
          <Text>{ type }</Text>
        </View>
        <View>
          <Text>{ description }</Text>
        </View>
      </View>

    </TouchableOpacity>

  );
}

const styles = {
  menuItemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin:5,
    borderWidth:1,
    borderColor: '#AAAAAA',
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  textContainer: {
    paddingLeft: 7,
    paddingBottom: 7,
    paddingTop: 7,
    flex: 1,
    flexWrap: 'wrap',
  },
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

export { MenuListItem };
