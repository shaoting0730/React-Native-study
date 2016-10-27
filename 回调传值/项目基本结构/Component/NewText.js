/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 自定义组件
 * 2016-09-23
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
  AsyncStorage
} from 'react-native';
var NewText = React.createClass({
  getDefaultProps(){
        //回调函数
        return{
            selectTextAction:null
        }
    },
    render() {
        return (
          <TouchableOpacity onPress = {()=>this.selectText('参数')}>
          <Text>自定义组件</Text>
          </TouchableOpacity>
        );
    },
    selectText(e){
      this.props.selectTextAction(e)
      // global.kkkkk = e
    }
});
const styles = StyleSheet.create({

});
//输出类
module.exports = NewText;
