import React, {Component} from 'react';
import {Button, View, Text, Image, StyleSheet } from 'react-native';

export default function Homescreen({navigation}){

  const navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
      source={require('../assets/home-icon.png')}
      style={[styles.icon,{tintColor:tintColor}]}
      />
    )
  };
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
      title= "Go to About"
      onPress={() => navigation.navigate('About')}/>
      </View>

    )
}


const styles = StyleSheet.create({
  icon:{
    width:24,
    height:24,
  }
});