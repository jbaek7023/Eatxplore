import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import RestaurantList from '../screens/main/RestaurantList';
import SideBar from '../components/SideBar';

const MainDrawerNavigator = DrawerNavigator ({
  List: {
    // StackNavigator Here next time
    screen: RestaurantList,
  },
}, {
    // header: null,
    // headerMode: 'none',
    // navigationOptions: {
    //   header: null
    // },
    contentComponent: props => <SideBar {...props} />,
    // lazy: true
  }
);

export default MainDrawerNavigator;
