import { StackNavigator } from 'react-navigation';
import RestaurantList from '../screens/main/RestaurantList';
import RestaurantDetail from '../screens/main/RestaurantDetail';
import MenuList from "../screens/main/MenuList";


export default StackNavigator ({
  List: {
    screen: RestaurantList,
  },
  RestaurantDetail: {
    screen: RestaurantDetail,
  },
  MenuList: {
    screen: MenuList,
  }
}, {
    header: null,
    headerMode: 'none',
    navigationOptions: {
      header: null
    },
    lazy: true
});
