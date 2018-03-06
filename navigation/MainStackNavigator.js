import { StackNavigator } from 'react-navigation';
import RestaurantList from '../screens/main/RestaurantList';

export default StackNavigator ({
  List: {
    screen: RestaurantList,
  },
}, {
    header: null,
    headerMode: 'none',
    navigationOptions: {
      header: null
    },
    lazy: true
});
