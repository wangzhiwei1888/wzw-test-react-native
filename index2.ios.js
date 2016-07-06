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
var request_url = 'http://rap.yixinonline.org/mockjsdata/1/userList';

class Test1 extends Component {
  
  constructor(props){

      super(props);
      var dataSource = new ListView.DataSource({
          rowHasChanged: (r1,r2) => r1 !== r2
      })
      this.state = {
          dataSource:dataSource,
          loaded:false
      }

    // this.state={
    //     movies:[]
    // }


  }

  componentDidMount() {

      //fetch data

      fetch(request_url)
        .then((response) => response.json())
        .then((reponseData) =>{
            console.log(reponseData)
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(reponseData.userList),
                loaded:true

            })
        })

  }

  render() {

    if(this.state.loaded){
        //render movies
        return this.renderList();
    }else{
        //render loading
        return this.renderLoadingView();
    }
  
  }


  renderList(){

      return (

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderItem}
          />
      )

  }

  renderItem(movie){

    //   var mockData = {title:'Title',year:'2015',posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}};
        return (
        <View style={styles.container}>
            <Image source={{uri:movie.photo}} style={styles.thumbnail} />
            <View style={styles.rightContainer}>
                <Text> {movie.name}</Text>
                <Text> {movie.createDate}</Text>
            </View>
        </View>
        
        );
  }

  renderLoadingView(){

    return (
      <View style={styles.container}>
            <Text> loading ...</Text>
      </View>
      
    );
  }


}
const styles = StyleSheet.create({
  
  container:{
      flex:1,
      paddingTop:20,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      
  },
  rightContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  thumbnail:{
      width:50,
      height:50
  }
});

AppRegistry.registerComponent('wzw', () => Test1);