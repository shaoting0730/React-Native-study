/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 2016-09-16
 * TextInput 常用属性
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
       <TextInput style={styles.inputStyle} 
         //value={'我是默认的'}     /*该文字无法删除*/
         keyboardType = {'number-pad'} //弹出键盘类型
         multiline = {true}   //多行显示,默认false:单行显示
//          password = {true}     //密码 多行文本不显示密码
         placeholder = {'我是占位文字'}  //占位文字
         placeholderTextColor = 'red'  //占位文字颜色
         autoCapitalize = {'characters'} //通知文本输入自动利用某些字符
         clearButtonMode = {'always'}    //右侧的清除模式
         autoCorrect = {false} //禁用自动校正 默认值true开启自动校正
        // editable = {false} // 是否可编辑 默认为true可编辑
        // retrunKeyType = {'go'} //返回键类型
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputStyle:{
    height:60,
    marginTop:20,
    borderWidth:1,
    borderColor:'black'
  }
});

AppRegistry.registerComponent('Project', () => Project);
