import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from "@react-navigation/native";
import {  createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from './components/Homescreen';
import AboutScreen from './components/Aboutscreen';
import ContactScreen from './components/ContactScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


