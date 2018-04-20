import { StackNavigator } from 'react-navigation';
import RestaurantList from '../screens/main/RestaurantList';
import RestaurantDetail from '../screens/main/RestaurantDetail';
import LoginScreen from "../screens/auth/LoginScreen";
import MenuDetail from "../screens/main/MenuDetail";
import LanguageSetting from '../screens/main/LanguageSetting';

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
  LanguageSetting: {
    screen: LanguageSetting,
  },
  MenuDetail: {
    screen: MenuDetail,
  }
}, {
    header: null,
    headerMode: 'none',
    navigationOptions: {
      header: null
    },
    lazy: true
});
