import { StackNavigator } from 'react-navigation';
import RestaurantList from '../screens/main/RestaurantList';
import MenuList from "../screens/main/MenuList";

export default StackNavigator ({
  List: {
    screen: MenuList,
  },
}, {
    header: null,
    headerMode: 'none',
    navigationOptions: {
      header: null
    },
    lazy: true
});
