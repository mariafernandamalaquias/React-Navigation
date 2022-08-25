import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer } from "react-navigation";
import {createStackNavigator } from "react-navigation-stack";

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';


export default function App() {
    return <AppContaneir />;
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Homescreen
  },
  About: {
    screen: Aboutscreen
  }
},{
      initialRouteName: "Home"
});

const AppContaneir = createAppContainer(AppNavigator);







