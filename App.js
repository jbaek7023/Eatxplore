import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

// redux here (later)
import { Provider } from 'react-redux';
import store from './store';

// import navigation
import RootNavigation from './navigation/RootNavigation';

import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  state = {
    assetsAreLoaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="light-content"/>}
            {Platform.OS === 'android' &&
              <View style={styles.statusBarUnderlay} />}
              <RootNavigation />
          </View>
        </Provider>
      );
    }
  }

  // Load Asset at the beginning of the app rendering
  async _loadAssetsAsync() {
    try {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Regular': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        'fontawesome': require('./assets/fonts/fontawesome.ttf'),
        'icomoon': require('./assets/fonts/icomoon.ttf'),
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      });
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
  },
});
