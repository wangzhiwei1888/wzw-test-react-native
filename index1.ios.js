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
  TextInput,
  ListView,
  ActivityIndicatorIOS,
  Switch,
  Picker,
  TouchableHighlight,
} from 'react-native';

var Dimensions = require('Dimensions');


class Test1 extends Component {
  
  render() {

      var {
          width,
          height
      } = Dimensions.get('window');

    return (
      <View style={{flex:1,paddingTop:20}}>
        
        
        <Text> window.width = {width}</Text>
        <Text> window.height = {height}</Text>

        <Text numberOfLines={3} style={{padding:10}}>丽兹行豪宅专家，真实房源，720度环景看房。豪宅网罗京城新鲜豪宅，买豪宅找丽兹行。豪宅全资讯，丽兹行豪宅，打造值得信赖..丽兹行豪宅专家，真实房源，720度环景看房。豪宅网罗京城新鲜豪宅，买豪宅找丽兹行。豪宅全资讯，丽兹行豪宅，打造值得信赖..丽兹行豪宅专家，真实房源，720度环景看房。豪宅网罗京城新鲜豪宅，买豪宅找丽兹行。豪宅全资讯，丽兹行豪宅，打造值得信赖..丽兹行豪宅专家，真实房源，720度环景看房。豪宅网罗京城新鲜豪宅，买豪宅找丽兹行。豪宅全资讯，丽兹行豪宅，打造值得信赖..丽兹行豪宅专家，真实房源，720度环景看房。豪宅网罗京城新鲜豪宅，买豪宅找丽兹行。豪宅全资讯，丽兹行豪宅，打造值得信赖..
</Text>

        <Image source={{uri:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}} style={{height:50,width:80,alignItems:'center',justifyContent:'center'}} >
            <Text style={{backgroundColor:'transparent',color:'red', fontWeight:'bold'}}> 111</Text>
        </Image>

        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:200,backgroundColor:'red'}}>
            <View>
                <Text>1</Text>
            </View>
            <View>
                <Text>2</Text>
            </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <View>
                <Text>1</Text>
            </View>
            <View>
                <Text>2</Text>
            </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text>1</Text>
            </View>
            <View>
                <Text>2</Text>
            </View>
        </View>

         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View>
                <Text>1</Text>
            </View>
            <View>
                <Text>2</Text>
            </View>
        </View>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View>
                <Text>1</Text>
            </View>
            <View>
                <Text>2</Text>
            </View>
        </View>


        <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'red',flexWrap:'wrap'}}>
            <View style={{width:100,backgroundColor:'blue',marginLeft:10,marginTop:10}}>
                <Text style={{textAlign:'center',color:'#fff'}}>1</Text>
            </View>
            <View style={{width:100,backgroundColor:'blue',marginLeft:10,marginTop:10}}>
                <Text style={{textAlign:'center',color:'#fff'}}>1</Text>
            </View>
            <View style={{width:100,backgroundColor:'blue',marginLeft:10,marginTop:10}}>
                <Text style={{textAlign:'center',color:'#fff'}}>1</Text>
            </View>
            <View style={{width:100,backgroundColor:'blue',marginLeft:10,marginTop:10}}>
                <Text style={{textAlign:'center',color:'#fff'}}>1</Text>
            </View>
            <View style={{width:100,backgroundColor:'blue',marginLeft:10,marginTop:10}}>
                <Text style={{textAlign:'center',color:'#fff'}}>1</Text>
            </View>

        </View>


        <View style={{flexDirection:'row',justifyContent:'space-around', height:100, alignItems:'flex-start', backgroundColor:'red',marginTop:10,flexWrap:'wrap'}}>
            <View style={{width:60,backgroundColor:'blue',marginLeft:10,marginTop:10}}>
                <Text style={{textAlign:'center',color:'#fff'}}>1</Text>
            </View>
            <View style={{width:60,backgroundColor:'blue',marginLeft:10,marginTop:10,alignSelf:'center'}}>
                <Text style={{textAlign:'center',color:'#fff'}}>1</Text>
            </View>
            <View style={{width:60,backgroundColor:'blue',marginLeft:10,marginTop:10,alignSelf:'flex-end'}}>
                <Text style={{textAlign:'center',color:'#fff'}}>1</Text>
            </View>
        </View>



        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor:'red',
    flex:1,
    paddingTop:20,
    flexDirection:'row',
  },
  text: {
      color:'blue',
      backgroundColor:'#ccc',
      margin:10,
      height:40,
      justifyContent: 'center',
      alignItems: 'center', 
  },
  
});

AppRegistry.registerComponent('wzw', () => Test1);