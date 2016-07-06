

import React, {Component} from 'react';

import {
  View,
  Text,
} from 'react-native';

// import { Button } from './common/Button/Button.js';
// import {Button} from 'common';
import {Button} from './Button.js';


class App extends Component{
  render(){
    return(
      <View style={{marginTop:30}}>
        <Text>hello world</Text>
        <Button />
      </View>
    )
  }
}

module.exports = App;
