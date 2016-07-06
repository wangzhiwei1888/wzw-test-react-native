/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


class Test1 extends Component {
  
  constructor(props){

      super(props);
      this.state = {
          loaded:false
      }
  }

  

  render() {
      return (
          <View style={styles.container}>
                <View style={{flex:1,flexDirection:'row',alignItems:'flex-end'}}>
                   <Text> hello world </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',bottom:10}}>
                    <Text>每天进步一点点</Text>
                </View>
          </View>
      )
  }

}
const styles = StyleSheet.create({
  
  container:{

      flex:1,
      justifyContent:'center',
      alignItems:'center',

  }
  
});

AppRegistry.registerComponent('wzw', () => Test1);