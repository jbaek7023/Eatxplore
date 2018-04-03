import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
// the previous created file
import i18n from '../lan/i18n';

// Localization
import { I18nextProvider, translate } from 'react-i18next';

import MainDrawerNavigator from './MainDrawerNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootTabNavigator = TabNavigator ({
    Auth: {
      screen: AuthStackNavigator,
    },
    Main: {
      screen: MainDrawerNavigator,
    },
  }, {
    // change later to Auth
    initialRouteName: 'Main',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      swipeEnabled: false,
      tabBarVisible: false,
    }),
    swipeEnabled: false,
    backBehavior: 'none',
    lazy: true,
  }
);

// Wrapping a stack with translation hoc asserts we trigger new render on language change
// the hoc is set to only trigger rerender on languageChanged
const WrappedRootTabNavigator = () => {
  return <RootTabNavigator screenProps={{ t: i18n.getFixedT() }} />;
}

const ReloadAppOnLanguageChange = translate('translation', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedRootTabNavigator);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <I18nextProvider i18n={ i18n }>
        <ReloadAppOnLanguageChange />
      </I18nextProvider>
    );
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  // notification => {origin, data}
  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );

    // Notifications.addListener((notification) => {
      // const { data: {text}, origin} = notification;
      // if(origin === 'received' && text ) {
      // Show Notification
      // {Alert} react-native
      // Alert.aleart({'New Push Notification', notification, [{text: 'Ok.'}]})
    // }
  // })
  };
}
