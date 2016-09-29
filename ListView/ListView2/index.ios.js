/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 ListView
 * 带有分组的ListView 使用cloneWithRowsAndSections设置数据源,三个参数:sectionIDs,rowIDs,dataBlob
 * 2016-09-22
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';
//导入外部的json数据
var Car = require('./Car.json');

var Project = React.createClass({
    //初始化函数 在这里准备数据源
    getInitialState(){
        var sectionData = (dataBlob,sectionID) => {
            return dataBlob[sectionID];
        };
        var rowData = (dataBlob,sectionID,rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        return{
            dataSource:new ListView.DataSource({
                getSectionData:sectionData,
                getRowData:rowData,
                rowHasChanged:(r1,r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1,s2) => s1 !== s2
            })
      }
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
            />
        );
    },
    //每一行数据
    renderRow(rowData){
      return(
         <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.rowStyle}>
                <Image source={{uri:rowData.icon}} style={styles.rowImageStyle}/>
                <Text style={{marginLeft: 5}}>{rowData.name}</Text>
            </View>
         </TouchableOpacity>
      );
    },
    //组数据
    renderSectionHeader(sectionData,sectionID){
        return(
            <View style={styles.sectionHeaderStyle}>
                <Text style={{color: 'red',marginLeft:5}}>{sectionData}</Text>
            </View>
        );
    },
    //做一些复杂的操作:数据请求
    componentDidMount() {
        this.loadDataFormJson();
    },
    loadDataFormJson(){
        //先取到data数据
        var jsonData = Car.data;
        //定义一些变量数组用来存值
        var dataBlob = {},sectionIDs = [],rowIDs = [],cars = [];
        //遍历
        for(var i = 0;i<jsonData.length;i++){
           //把组号放入sectionIDs数组中
            sectionIDs.push(i);
            //把组中内容放入dataBlob对象中
            dataBlob[i] = jsonData[i].title;
            //把组中的每行数据的数组放入cars
            cars = jsonData[i].cars;
            //先确定rowIDs的第一维
            rowIDs[i] = [];
            //遍历cars数组,确定rowIDs的第二维
            for(var j = 0;j<cars.length;j++){
                rowIDs[i].push(j);
                //把每一行中的内容放入dataBlob对象中
                dataBlob[i+':'+j] = cars[j];
            }
        }
        this.setState({
           dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        });
    }
});

const styles = StyleSheet.create({
    rowImageStyle:{
            width:70,
            height:70
    },
    rowStyle:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    sectionHeaderStyle:{
        backgroundColor:'#e8e8e8',
        height:25,
        justifyContent:'center'
    }
});

AppRegistry.registerComponent('Project', () => Project);
