/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 ListView1
 * 2016-09-21
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
  ListView,
    AlertIOS,
  TouchableOpacity
} from 'react-native';
//导入json
var shareData= require('./shareJson.json');
//Dimentsions
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
//一些常量设置
var cols = 3; //一行几个cell
var cellWH = 100; //cell的宽高
var vMargin = (screenWidth - cellWH * cols)/ (cols + 1); //cell之间的边距
var hMargin = 20;

var Project = React.createClass({
  //设置默认值(不可修改)
  getDefaultProps(){
    return{

    }
  },
  //设置初始值(可以修改)
  getInitialState(){
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
    return{
        dataSource : ds.cloneWithRows(shareData.data)
    }
  },
  render(){
    return(
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            contentContainerStyle={styles.listViewStyle}
        />
    );
  },
  //单独的cell
  renderRow(rowData){
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.cellOnclick()}}>
        <View style={styles.innerViewStyle}>
          <Image source={{uri:rowData.icon}} style={styles.iconStyle}/>
          <Text>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    );
  },
  cellOnclick(){
    AlertIOS.alert("点击了cell")
  }
});

const styles = StyleSheet.create({
  listViewStyle:{
      //改变主轴方向
    flexDirection:'row',
    //多行显示
    flexWrap:'wrap'
  },
  innerViewStyle:{
    width:cellWH,
    height:cellWH,
    marginLeft:vMargin,
    marginTop:hMargin,
    alignItems:'center'
  },
  iconStyle :{
    width:80,
    height:80
  }
});

AppRegistry.registerComponent('Project', () => Project);
