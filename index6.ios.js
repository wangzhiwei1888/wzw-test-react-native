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

// V = f()
const A = () => <View><Text>sdfsdf</Text><Button con="提交" /></View>
// V = f(nextProps)
// const Button = ({con}) => <View style={{ backgroundColor:'red',width:80, height:30, alignItems:'center',justifyContent:'center'}}><Text style={{ color:'#fff'}}>{con}</Text></View>
// V = f(nextProps, nextState)
class B extends Component{

  constructor(){
    super()
    this.state = {
      con:"提交"
    }

    setTimeout((()=>{
      // this.state.con = '下一步'; //不会执行 render 函数
      this.setState({//设置 nextState,完成之后，会从新执行 render 函数 进行渲染
        con:'下一步'
      })

      this.setState({
        con:'下一步'
      })

    }).bind(this),3000)
  }
  //挂载 虚拟Dom 还没生成
  componentWillMount(){

    //render 前
  }

  componentDidMount(){

    //render 后
  }

  componentWillUnMount(){

    //组件销毁
  }


  //key值不同 Button 组件每次都重新创建。
  render(){
    console.log('111')
    const { con } = this.state;
    console.log(con)
    return(
      <View style={{marginTop:130,backgroundColor:'blue'}} >

        <Button con={con} key={Math.random()} />
      </View>
    )
  }
}

// V = f(f(nextProps),nextState)
const log_connection = (Comp) => {

  class C extends Component{

    render(){
      <View>
        <Comp />
      </View>
    }
  }

  return C;
}

class Button extends Component{

  //更新 虚拟Dom 已经生成
  componentWillReceiveProps(){
    //接收到 父组件的 con 时触发
    //1
  }

  shouldComponentUpdate(nextProps,nextState){
    //2
    if(this.props.con === nextProps.con){

      return false;
    }
    //当 return false; 子组件，不会响应父组件的请求 ，即 setTimeout 执行后此处并不能渲染。
    return true;
  }

  componentWillUpdate(){

    //3
  }

  componentDidUpdate(){

    //5
  }



  render(){
    //4
    const { con } = this.props;
    return (
      <View style={{ backgroundColor:'red',width:80, height:30, alignItems:'center',justifyContent:'center'}}><Text style={{ color:'#fff'}}>{con}</Text></View>
    )
  }
}



// AppRegistry.registerComponent('wzw', () => B);
// AppRegistry.registerComponent('wzw', () => log_connection(B));

AppRegistry.registerComponent('wzw', () => B);
