/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停
 * image 加载的三种方式+设置图片的内容模式
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>加载工程中图片</Text>
       <Image source={require('./imgs/1111.png')} style={{width:120,height:120}}/> 
        <Text>加载Xcode中asset的图片</Text>
       <Image source={require('image!520')} style={{width:120,height:120}} />
        <Text>加载网络中的图片</Text>
       <Image source={{uri:'https://unsplash.it/600/400/?random'}} style={{width:120,height:200}}/>
        <Text>设置加载图片的模式</Text>
        <Image source={{uri:'https://unsplash.it/600/400/?random'}} style={{width:120,height:200,resizeMode:Image.resizeMode.cover}}/>
        <Image source={{uri:'https://unsplash.it/600/400/?random'}} style={{width:120,height:200,resizeMode:Image.resizeMode.contain}}/>
        <Image source={{uri:'https://unsplash.it/600/400/?random'}} style={{width:120,height:200,resizeMode:Image.resizeMode.stretch}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,//上边距
    flexDirection:'column',//主轴方向 垂直
    justifyContent: 'flex-start',//控件在主轴上的对齐方向
    alignItems: 'flex-start', //控件在侧轴上的对齐方向
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Project', () => Project);
