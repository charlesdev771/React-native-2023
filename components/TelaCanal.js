import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TextInput, ImageBackgroundBase, Alert, Button, Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Component } from 'react/cjs/react.production.min';




export default function TelaCanal({navigation})
{
  return (
    <View>
      <Text>
        Canal
      </Text>

      <Button title='Home' onPress={()=>navigation.navigate("Home")} />
      <Button title='Voltar' onPress={()=>navigation.goBack()} />

    </View>
  );
}