import React, {Component} from 'react';
import {Button, View, Text } from 'react-native';


export default function Homescreen({navigation}){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
      title= "Go to About"
      onPress={() => navigation.navigate('About')}/>
      </View>

    )
}