/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * TextInput的练习  登录界面实现
 * 周少停 2016-09-18
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class loginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*头像*/}
        <Image source={require('./imgs/icon1.png')} style={styles.iconStyle}/>
        {/*账号+密码*/}
        <TextInput placeholder={"请输入用户名"} style={styles.textInputStyle}/>
        <TextInput placeholder={"请输入密码"} password={true} style={styles.textInputStyle}/>
        {/*登录按钮*/}
        <View style={styles.loginBtnStyle}>
          <Text style={{color:'white'}}>登录</Text>
        </View>
        {/*设置界面*/}
        <View style={styles.settingStyle}>
          <Text>无法登录</Text>
          <Text>新用户</Text>
        </View>
        {/*其他登录方式界面*/}
        <View style={styles.otherLoginStyle}>
          <Text>其他登录方式</Text>
          <Image source={require('./imgs/icon2.png')} style={styles.otherImgStyle} />
          <Image source={require('./imgs/icon3.png')} style={styles.otherImgStyle} />
          <Image source={require('./imgs/icon4.png')} style={styles.otherImgStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',//背景色
    alignItems:'center',        //设置侧轴的对齐方式
  },
  iconStyle: {
    width:80,  //宽
    height:80,  //高
    borderRadius:40, //圆弧半径
    borderWidth:2,  //边框宽度
    borderColor:'white', //边框颜色
    marginTop:50,     //上边距
    marginBottom:10   //下边距 
  },
  textInputStyle: {
    height:38,
    backgroundColor:'white',
    marginBottom:1,
    textAlign:'center',//文字对齐方式
  },
  loginBtnStyle:{
    width:350,
    height:35,
    backgroundColor:'red',
    marginTop:30,
    marginBottom:20,
    justifyContent:'center', //控件在主轴上的对齐方式
    alignItems:'center', //控件在侧轴上的对齐方式
    borderRadius:8,
  },
  settingStyle: {
    width:width * 0.8,
    flexDirection:'row', //设置主轴方向
    justifyContent:'space-between',  //控件在主轴上的对齐方式
  },
  otherLoginStyle: {
    flexDirection:'row', 
    alignItems:'center',
    //绝对定位于底部
    position:'absolute', //绝对定位
    bottom:10,
    left:20
  },
  otherImgStyle: {
    width:40,
    height:40,
    borderRadius:20,
    marginLeft:10
  }
});

module.exports = loginView;   //供外部调用,输出类