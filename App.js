import React from 'react';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import { AppTabNavigator } from './components/AppTabNavigator.js';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
}

const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen: { screen: SignUpLoginScreen },
  BottomTab: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
