import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

import App2 from './components/comp1';
import Styles from './styles/styles';



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





export default function App1() { //Function component
  return (

    <View style={styles.cont}>
      <Text>Hello</Text>
      <Text style={Styles.cor}>Fried</Text>
      <App2 valor="100" />
    </View>
    
  );
};

const styles = StyleSheet.create({

  cont: {
      flex: 1,
      backgroundColor: '#999',
      alignItems: 'center',
  },

});