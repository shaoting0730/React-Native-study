
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 生命周期:实例化阶段.存在阶段.销毁阶段
 * 2016-09-19
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
//ES5写法 ES5写法和ES6稍有不同
var LifeDate = React.createClass({  
  getDefaultProps(){    //初始化一些不可以修改的值,初始化完毕后将不会再次调用,可以通过this.props来获取初始化后的值,不可以修改
    return{
        age:18 //永远18
    };
  },
  getInitialState(){     //初始化一些可以修改的值,会多次调用,可以通过this.state来获取值,通过this.setState来修改修改值
    return {
      isGoodPerson:true,
      content: '我是什么人'
    };
  },
  componentWillMount(){
    return{
                        //相当于iOS中viewWillAppear
    };
  },
  componentDidMount(){
    return{
                        //相当于iOS中的viewDidLoad 可以在这里做一些复杂操作,如网络请求数据
    };
  },
  render() {
    return (
      <View ref="topView" style={styles.container}>
        <TouchableOpacity onPress = {() =>this.dealWithState(this.state.isGoodPerson)}>
          <View style={styles.innerViewStyle}>
            <Text>{this.state.content}</Text>
            <Text>{this.props.age}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
  dealWithState: function(data:Boolean){
    var isGoodPerson,content;
    if(data){
      isGoodPerson = false,
      content = '我是大好人'
    }else{
      isGoodPerson = true,
      content = '我是坏淫'
    }
    //更新状态机
    this.setState({
      isGoodPerson: isGoodPerson,
      content: content
    });
    //拿到View
    this.refs.topView
  }  
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  innerViewStyle: {
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('Project', () => LifeDate);

