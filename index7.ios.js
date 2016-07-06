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

const Button = ({children}) => <View>
  <View>{children}</View>
</View>

const A = () => <View><Text>sdfsdf</Text><Button><Text>abc</Text></Button></View>


AppRegistry.registerComponent('wzw', () => A);
