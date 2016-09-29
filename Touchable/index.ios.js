/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 Touchable交互
 * 2016-09-19
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

class Project extends Component {
    render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} 
//           onPress = {()=>this.activeEvent('点击')}
//           onPressIn = {()=>this.activeEvent('按下')}
//           onPressOut = {()=>this.activeEvent('抬起')}
          onLongPress = {()=>this.activeEvent("长按")}
          >
          <View style={styles.innerViewStyle}>
            <Text>我是可以点击的一个Text文本</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  activeEvent(event){
    AlertIOS.alert(event);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  innerViewStyle: {
    backgroundColor: 'red',
  }
});

AppRegistry.registerComponent('Project', () => Project);
