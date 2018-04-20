import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {H2, H3} from 'native-base';
import StarRating from 'react-native-star-rating';
import {FontAwesome} from "../../assets/icons";

class ReviewListItem extends Component {

  render() {
    let { review } = this.props;

    return (
        <View key={review.id} style={styles.reviewContainer}>
          <View>
            <Text style={{fontSize: 20}}><Text style={{fontFamily: 'fontawesome'}}>{FontAwesome.asterisk}</Text> Reviews from {review.nationality} people</Text>
          </View>
          <View style={styles.reviewContentContainer}>
            <View style={styles.imageContainer}>
             <Image source={{uri: review.userImage}} style={styles.imageStyle}/>
            </View>
            <View style={{flex:1}}>
              <View style={styles.nameRateContainer}>
                <Text style={{fontSize: 18}}>{review.username} </Text>
                <StarRating
                    disabled={true}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    starSize={18}
                    rating={review.rate}
                    fullStarColor={'yellow'}/>

              </View>
            <View><Text>{review.comment}</Text></View>
            </View>
          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  reviewContainer: {
    padding: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  nameRateContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  imageContainer: {
    width: 80,
    marginLeft: 7,
  },
  reviewContentContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 7,
  },
  imageStyle: {
    width: 66,
    height: 66
  },
});

export default ReviewListItem;