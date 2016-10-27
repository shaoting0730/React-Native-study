/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 
 * 2016-09-23
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

var Home = React.createClass({
    //固定值
    getDefaultProps(){
        return{
          url_api:"http://XXXXXXXXXX"
        }
    },
    //初始化方法
    getInitialState(){
      return{
          //ListView等数据源
      }
    },
    render() {
        return (
            <View style={styles.container}>
                <Text>首页</Text>
            </View>
        );
    },
    //请求网络数据
    componentDidMount(){
        this.loadDataFromNet();
    },
    loadDataFromNet(){
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                //responseData 就是从网上拉下来的数据
            })
            .catch((error)=>{
               //网络失败
        })
    }
});
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

//输出类
module.exports = Home;
