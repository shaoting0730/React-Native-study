/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 自定义组件和主界面之间的传值(回调) global简单传值
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
var NewText = require('./NewText')
var Find = React.createClass({
    render() {
        return (
            <View style={styles.container}>
            {/*自定义组件*/}
              <NewText selectTextAction = {(e)=>this.showParameter(e)}/>
            </View>
        );
    },
    showParameter(e){
      alert('我是自定义组件传的值===>>>'+e);//自定义组件往主界面传的参数
      // alert(kkkkk)
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
module.exports = Find;
