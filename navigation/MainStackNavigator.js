import { StackNavigator } from 'react-navigation';
import RestaurantList from '../screens/main/RestaurantList';
import RestaurantDetail from '../screens/main/RestaurantDetail';
import MenuList from "../screens/main/MenuList";
import LoginScreen from "../screens/auth/LoginScreen";


export default StackNavigator ({
  List: {
    screen: LoginScreen,
  },
  RestaurantList: {
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
