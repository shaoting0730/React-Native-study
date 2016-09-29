/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 2016-09-13
 * Imaage的常见属性
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
//导入json数据
var BadgeData = require('./BadgeData.json');

//定义一些全局变量
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window'); //屏宽
var cols = 3 //总列数
var boxW = 100; //单个盒子的宽度&高度
var vMargin = (width - cols*boxW)/(cols + 1);//盒子中间的水平间距
var hMargin = 25;
 
class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
       {/*返回包的数据*/}
        {this.renderAllBadge()}
      </View>
    );
  }
  //返回所有的包
  renderAllBadge(){
    //定义一个数组,装每个包的信息
    var allBadge = [];
    //遍历json数据
    for(var i=0;i<BadgeData.data.length;i++){
      //去除单独的数据对象
      var badge = BadgeData.data[i];
      //直接装入数组
      allBadge.push(
        <View key={i} style={styles.outViewStyle}>
            <Image source={{uri:badge.icon}} style={styles.imageStyle} />
            <Text style={styles.mainTitleStyle}>
               {badge.title}
            </Text>
        </View>
      );
    }
    //返回数组
    return allBadge;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,//上边距
    flexDirection:'row',//主轴方向,水平
    alignItems:'flex-start',//定义控件在侧轴上的对齐方式
    flexWrap:'wrap',//是否换行
    backgroundColor: '#F5FCFF'
  },
  outViewStyle: {
    backgroundColor:'gray',
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginBottom:hMargin
  },
  imageStyle:{
    width:80,
    height:80
  },
  mainTitleStyle:{
    color:'white'
  }
});

AppRegistry.registerComponent('Project', () => Project);
