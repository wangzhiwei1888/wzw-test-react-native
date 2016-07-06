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
          loaded:'state'
      }
  }

  render() {
      return (
          <View style={styles.container}>
                <View style={{backgroundColor:'red',height:160,flexDirection:'row',paddingTop:20}}>
                    <View style={{flex:1,backgroundColor:'#444',opacity:0.5,alignItems:'center',justifyContent:'center'}}>
                        <Text> 1 </Text>
                    </View>
                   <View style={{flex:1}}>
                        <View style={{height:80,backgroundColor:'#555',opacity:0.5,alignItems:'center',justifyContent:'center'}}>
                            <Text> 2 {this.state.loaded}</Text>
                        </View>
                        <View style={{flex:1,backgroundColor:'rgba(100,100,100,0.3)',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                            <Text style={{color:'#000',fontWeight:'bold'}}> 3 { 0? <Text> 2 </Text> : <Text> 3 </Text>}</Text>
                            
                        </View>
                    </View>
                </View>
                <View>

                
                
                </View>
          </View>
      )
  }

}
const styles = StyleSheet.create({
  
  container:{
      backgroundColor:'#ccc',
      flex:1
  }

  
});

AppRegistry.registerComponent('wzw', () => Test1);