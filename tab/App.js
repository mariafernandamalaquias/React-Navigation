
import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';
import ContactScreen from './components/ContactScreen';
                  

export default function App() {
    return <AppContaneir />;
}

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Homescreen
  },
  About: {
    screen: Aboutscreen
  },
  Contact:{
    screen: ContactScreen
  }
}, {
      initialRouteName: "Home"
});

const AppContaneir = createAppContainer(AppNavigator);
