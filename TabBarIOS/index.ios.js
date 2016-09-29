/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停  TabBarIos TabBarIos.Item
 * 2016-09-22
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  View
} from 'react-native';



var Project = React.createClass({
  //设置初始值
  getInitialState(){
    return{
      //默认选中第一个Item
      selectedTabBarItem: 'home'
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS barTintColor='black'>
          <TabBarIOS.Item
            systemIcon="bookmarks"
            badge="3"
            selected = {this.state.selectedTabBarItem == 'home'}
            onPress = {()=>{this.setState({selectedTabBarItem: 'home'})}}
          >
            <View style={[styles.commonViewStyle,{backgroundColor: 'red'}]}>
              <Text>首页</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              systemIcon="more"
              selected = {this.state.selectedTabBarItem == 'second'}
              onPress = {()=>{this.setState({selectedTabBarItem: 'second'})}}
          >
            <View style={[styles.commonViewStyle,{backgroundColor:'yellow'}]}>
              <Text>第二页</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              systemIcon="downloads"
              selected = {this.state.selectedTabBarItem == 'three'}
              onPress = {()=>{this.setState({selectedTabBarItem: 'three'})}}
          >
            <View style={[styles.commonViewStyle,{backgroundColor:'cyan'}]}>
              <Text>第三页</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              // systemIcon="contacts"
              icon = {require('./1.png')}
              badge="6"
              selected = {this.state.selectedTabBarItem == 'four'}
              onPress = {()=>{this.setState({selectedTabBarItem: 'four'})}}
          >
            <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
              <Text>第四页</Text>
            </View>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5fcff',
  },
  commonViewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

AppRegistry.registerComponent('Project', () => Project);
