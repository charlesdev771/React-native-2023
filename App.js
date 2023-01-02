import React from 'react';
import type {Node} from 'react';
import {TextInput, ImageBackgroundBase, Alert, Button, Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

import Styles from './styles/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import TelaCursos from './components/TelaCursos';

const imgF = './assets/2165563.png';
const Pilha = createStackNavigator();
const Guias = createBottomTabNavigator();
const Gavetas = createDrawerNavigator();

function TelaHome({navigation})
{
  return (
    <View>
      <Text>
        Home
      </Text>

      <Button    title='Canal' onPress={()=>navigation.navigate('Canal') }/>
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
      <Button title='Cursos' onPress={()=>navigation.navigate("Cursos")} />
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
      <Gavetas.Navigator initialRouteName="TelaCanal">


        <Gavetas.Screen
     name="Home" 
     component={TelaHome} 
     options={{ Title: "Home", 
     headerStyle: {
       backgroundColor: '#f00',
     },
     headerTintColor: '#fff',
     fontWeight: 'bold',
     headerRight: ()=>(
       <Button
         title="Cursos"
         color="#000"
         onPress={()=>alert('Clicado')}
       />
     ),
    }
   } 
        />

        <Gavetas.Screen
          name="Canal"
          component={TelaCanal}
          options={{ Title: "Canal",
          headerStyle: {
            backgroundColor: '#f00',
          },
          headerTintColor: '#fff',
         }}
        />

        <Gavetas.Screen
          name="Cursos"
          component={TelaCursos}
          options={{ title: "Cursos",
          headerStyle: {
            backgroundColor: '#f00',
          },
          headerTintColor: '#fff', }}

        />
      </Gavetas.Navigator>
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