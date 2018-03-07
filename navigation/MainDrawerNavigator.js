import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import SideBar from '../components/SideBar';
import MainStackNavigator from './MainStackNavigator';

const MainDrawerNavigator = DrawerNavigator ({
  MainList: {
    screen: MainStackNavigator,
  },
}, {
    // header: null,
    // headerMode: 'none',
    // navigationOptions: {
    //   header: null
    // },
    contentComponent: props => <SideBar {...props} />,
    drawerPosition: 'left',
    headerMode: 'screen',
    // lazy: true
  }
);

export default MainDrawerNavigator;
