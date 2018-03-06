import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/auth/LoginScreen'

export default StackNavigator ({
  Login: {
    screen: LoginScreen,
  },
}, {
    header: null,
    headerMode: 'none',
    navigationOptions: {
      header: null
    },
    lazy: true
});
