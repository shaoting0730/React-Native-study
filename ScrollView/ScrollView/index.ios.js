/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 ScrollView 的常用属性
 * 2016-09-19
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  AlertIOS,
  View
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          horizontal={true}  //排列方向:横向  默认false纵向
          showsHorizontalScrollIndicator={false}  //隐藏水平线
          pagingEnabled={true}  //分页滑动 iOS
//           scrollEnabled={false}  //是否滚动 iOS
          bounces={false}  //关闭弹簧效果 iOS
          onScrollBeginDrag={()=>this.beginDrag()} //开始滑动时调用
          onScrollEndDrag={()=>this.endDrag()} //结束滑动时调用
          onMomentumScrollEnd={()=>this.momentumScroll()}//当一帧滑动完毕后调用
          >
            {this.renderChildView()}
        </ScrollView>
      </View>
    );
  }
  renderChildView(){
    //数组
    var allChild = [];
    var colors = ['red','blue','yellow','cyan','purple'];
    //遍历
    for(var i=0; i<5;i++){
      allChild.push(  //装载
        <View key={i} style={{backgroundColor:colors[i],width:width,height:120}}>
          <Text>{i}</Text>
        </View>
      );
    }
    //返回
    return allChild;
  }
  beginDrag(){
//     AlertIOS.alert('开始滑动');
  }
  endDrag(){
//     AlertIOS.alert('滑动结束');
  }
  momentumScroll(){
//     AlertIOS.alert('一帧结束')
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('Project', () => Project);
