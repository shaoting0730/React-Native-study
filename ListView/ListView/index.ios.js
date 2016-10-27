/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 listView
 * 2016-09-21
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';
//导入json数据
var Wine = require('./WineJson.json'); //json数组

var Project = React.createClass({
  //设置初始值
  getInitialState(){
    //设置数据源
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}); //当且仅当cell中的任意两行不相等时才重新渲染
    //设置返回数据
    return{
      dataSource:ds.cloneWithRows(Wine)
    }
  },
  render(){
    return(
        <ListView
            dataSource={this.state.dataSource} //数据源
            renderRow={this.renderRow} //返回具体的cell,有四个参数 => 1:一条信息 2:分组ID 3:行ID 4:标记是否高亮选中的状态信息.不带()表示参数自传递
        />
    );
  },
  //返回具体的cell
  renderRow(rowData,sectionID,rowID,highlightRow){
    return(
        <View style={styles.cellViewStyle}>
          {/*左边的图片*/}
          <Image source={{uri:rowData.image}} style={styles.leftImageStyle} />
          {/*右边的View*/}
          <View style={styles.rightViewStyle}>
            <Text style={styles.nameTextStyle}>{rowData.name}</Text>
            <Text style={styles.montyTextStyle}>${rowData.money}</Text>
          </View>
        </View>
    );
  }

});

const styles = StyleSheet.create({
  cellViewStyle:{
    flexDirection:'row',//主轴方向
    borderBottomWidth:1,
    borderBottomColor:'cyan'
  },
  leftImageStyle:{
    width:60,
    height:60
  },
  rightViewStyle:{

  },
  nameTextStyle:{

  },
  montyTextStyle:{
    color:'red',
    //距底部2
    position:'absolute',
    bottom:2
  }
});

AppRegistry.registerComponent('Project', () => Project);