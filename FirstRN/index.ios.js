/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 2016-09-12
 * 弹性布局 flex-box 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
/**-----------------------------------第一个示例程序----------------------------------------------------- **/
class Project extends Component {
  render() { //初始化
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor:'red',height:50}}>第一个</Text>
        <Text style={{backgroundColor:'blue',height:100}}>第二个</Text>
        <Text style={{backgroundColor:'green',height:160}}>第三个</Text>
        <Text style={{backgroundColor:'yellow',height:200}}>第四个</Text>
      </View>
    );
  }
}
//样式
const styles = StyleSheet.create({
  container: {
//     flex:1,  //充满全屏,否则内容多少,只显示多少区域.   是'flex-grow''flex-shrink''flex-basis'三个属性的缩写,其中第二个和第三个参数都是可选,默认值是"0 1 auto" 宽度 = 弹性宽度 * (flexGrow/sum(flexGrow))
//     width:200,
    height:200,
    marginTop:20,//上边距
    backgroundColor:'black',//背景色
    flexDirection:'row', //React Native 布局采用FlexBox(弹性布局),该属性是设置布局的主轴方向为row:横向(默认方向是竖向:column)
    justifyContent:'space-between', //定义了伸缩项目在主轴线的对齐方式 flex-start | flex-end | center | space-between | space-around 
    alignItems:'flex-start'    //定义了伸缩项目在侧轴(交叉轴)的对齐方式 flex-start | flex-end | center | baseline | stretch(默认) 
  }
});

/**-----------------------------------第二个示例程序----------------------------------------------------- **/
class Project1 extends Component {
  render() { //初始化
    return (
      <View style={styles1.container}>
        <Text style={{backgroundColor:'red',width:200}}>第一个</Text>
        <Text style={{backgroundColor:'blue',width:300}}>第二个</Text>
        <Text style={{backgroundColor:'green',width:200}}>第三个</Text>
        <Text style={{backgroundColor:'yellow',width:200}}>第四个</Text>
      </View>
    );
  }
}
const styles1 = StyleSheet.create({
   container:{
      backgroundColor:'black',
      marginTop:20,
      flexDirection:'row',
      justifyContent:'flex-start',
      flexWrap:'wrap' //定义显示不下的显示模式,默认情况下,控件都是在一条线上   wrap换行 nowarp(默认值)不换行 warp-reverse:换行,效果和wrap相反
   }
});
/**-----------------------------------第三个示例程序----------------------------------------------------- **/
 //alignSelf允许单个项目可以有自己单独的对齐方式
class Project2 extends Component{
  render(){
    return(
      <View style={styles2.container}>
        <Text style={{backgroundColor:'red',flex:1,height:50,alignSelf:'center'}}>第一个</Text>  
        <Text style={{backgroundColor:'blue',flex:2,height:30,alignSelf:'flex-start'}}>第二个</Text>
        <Text style={{backgroundColor:'green',flex:2,height:70,alignSelf:'flex-end'}}>第三个</Text>
        <Text style={{backgroundColor:'yellow',flex:1,height:80,alignSelf:'stretch'}}>第四个</Text>
      </View>
    );
  }
}
const styles2 = StyleSheet.create({
   container:{
     backgroundColor:'black',
     marginTop:20,
     flexDirection:'row'
   }
});

AppRegistry.registerComponent('Project', () => Project2);  //注册
