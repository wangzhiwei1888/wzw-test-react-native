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
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#F5FCFF'}}>
                   <Text style={[styles.fontStyle,{color:'red'}]}> hello world </Text>
                   <Image source={{uri:'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}} style={{width:100,height:100}} />

                </View>
          </View>
      )
  }

}
const styles = StyleSheet.create({
  
  container:{
      flex:1,
  },
  fontStyle:{
    fontSize:20,
  }

  
});

AppRegistry.registerComponent('wzw', () => Test1);