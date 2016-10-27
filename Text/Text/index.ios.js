/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 Text
 * 2016-10-08
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textViewStyle} numberOfLines={6}>
          演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字,演示的文字
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textViewStyle:{
    color:'red',  //字体颜色
    fontSize:23,  //字体大小
    fontStyle:'normal',   //字体风格,枚举值,normal,bold
    fontWeight: 'bold',     //字体粗细权重,枚举值,normal,bold,100,200,300,400,500,600,700,800,900
    textShadowOffset:{width:3, height:4}, //阴影效果
    textShadowRadius: 2, //阴影效果圆角
    textShadowColor:'yellow',//阴影效果颜色
    letterSpacing:3 , //字符间距
    lineHeight:80 , //行高
    textAlign:'center', //文字对齐方式,枚举值:auto left right center justify
    textDecorationLine:'underline', //横线位置,枚举值,none,underline,line-through,underline line-through
    textDecorationStyle:'solid', //线的风格,solid double dotted dashed
    textDecorationColor:'red', //线的颜色
    writingDirection:'ltr' //文本方向.枚举值,auto,ltr,rtl
  }
});

AppRegistry.registerComponent('Project', () => Project);
