/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 2016-10-08
 * Alert
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
    Toast,
  TouchableOpacity
} from 'react-native';

class Project extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
          <TouchableOpacity onPress={this.alertInfo}>
            <Text>弹出默认Alert</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.alertInfo1}>
            <Text>弹出俩按钮的Alert</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={this.alertInfo2}>
           <Text>弹出俩按钮的Alert</Text>
          </TouchableOpacity>
      </View>
    );
  }
  alertInfo(){
    Alert.alert('我是默认Alert','我是文字说明');
  }
  alertInfo1(){
    Alert.alert('我是俩个按钮的Alert','我是文字说明',[
      {text:'取消',onPress:()=>{console.log('输出打印的东西:取消')}},
      {text:'确定',onPress:()=>{console.log('输出打印的东西:确定')}}
    ])
  }
  alertInfo2(){
    Alert.alert('订单信息','本次需要付款200$',[
      {text:'使用优惠券',onPress:()=>{console.log('没有优惠券')}},
      {text:'确定',onPress:()=>{console.log('支付了200$')}},
      {text:'取消',onPress:()=>{console.log('不买了')}}
    ])
  }
}

const styles = StyleSheet.create({
    viewStyle:{
      marginTop:20,
      justifyContent:'center',
      alignItems:'center'
    }
});

AppRegistry.registerComponent('Project', () => Project);
