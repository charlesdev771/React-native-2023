import React from 'react';
import type {Node} from 'react';
import {TextInput, ImageBackgroundBase, Alert, Button, Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

import App2 from './components/comp1';
import Styles from './styles/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const imgF = './assets/2165563.png';
const Pilha = createStackNavigator();

function TelaHome({navigation})
{
  return (
    <View>
      <Text>
        <Button 
        
        
          title='Inicial'
          onPress={()=>navigation.navigate('Canal') }
        
        />
      </Text>
    </View>
  );
}
function TelaCanal({navigation})
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


/*
export default class App1 extends Component //class Component
{
  render()
  {
    return (
      <View>
        <Text>aa</Text>
      </View>
    )
  }
}

*/


const exibir = (inc) =>
{
  if (inc)
  {
    return (<Text>Inscreva-se</Text>)
  }
  else{
    return (<Text>Nao precisa :)</Text>)
  }
}


export default function App1() { //Function component

  return (

    <NavigationContainer>
      <Pilha.Navigator initialRouteName="TelaCanal">
        <Pilha.Screen 
          name="Home" 
          component={TelaHome} 
          options={{ Title: "Home" }} 
        />

        <Pilha.Screen
          name="Canal"
          component={TelaCanal}
          options={{ Title: "Canal" }}
        />
      </Pilha.Navigator>
    </NavigationContainer>



    /*
      <View style={styles.cont}>
        <ImageBackground source={require(imgF)}>
        <Text>Hello</Text>
        <Text style={Styles.cor}>Fried</Text>
        <App2 valor="100" />

        <Button title="Clicar" onPress={() => Alert.alert('MSG', "Hello World!")} />
        <TextInput style={{ borderWidth: 1, borderColor: '#000'}}></TextInput>
        {exibir(true)}

        <Image style={styles.img} source={require('./assets/2165563.png')} /> 
        </ImageBackground>
      </View>
      */
  );
};

const styles = StyleSheet.create({

  cont: {
      backgroundColor: '#999',
      alignItems: 'center',
  },

  img: 
  {
    width: '50%',
    resizeMode: 'contain', //Cover, stretch, center, repeat
  },

  imgFundo: 
  {
    flex: 1,
    resizeMode: "cover",
  }

});