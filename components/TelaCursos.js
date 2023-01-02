import React from 'react';
import type {Node} from 'react';
import {TextInput, ImageBackgroundBase, Alert, Button, Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function TelaCursos({navigation})
{
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, color: '#000', marginBottom: 30 }}>Cursos</Text>
      <Button  style={{ width: '100%'}}  title='React Native' onPress={()=>navigation.navigate("TelaReactNative", {
        aulas: 100, autor: "Charles"
      })} />

    </View>
    
  );
}