/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 ScrollView demo
 * 2016-09-20
 */
//首先导入计时器类库:
//终端:  cd 项目根目录
//      npm i react-timer-mixin --save
//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View
} from 'react-native';
//引入计时器类库
var TimerMixin = require('react-timer-mixin');
//引入json数据
var ImageData = require('./imageTitleJson.json');
//引入Dimensions
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;


var Project = React.createClass({
    mixins: [TimerMixin], //注册计时器
    //设置固定值
    getDefaultProps(){
      return{
          //时间间隔
          duration : 2000
      }
    },
    //设置page的初始值和可变值
    //默认第一页选中
    getInitialState(){
        return {
        //当前页码
        currentPage : 0
     };
    },
    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref="scrollView" style={styles.scrollViewStyle}
                            horizontal={true} //水平排列
                            pagingEnabled={true}  //分页滑动
                            onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)} //一帧结束回调,去除()表示把该组件作为参数传过去
                            onScrollBeginDrag={this.BeginDrag} //开始拖拽就停止定时器
                            onScrollEndDrag={this.EndDrag} //停止拖拽就启动定时器
                >
                    {this.readerAllImage()}
                </ScrollView>
                {/*返回六点*/}
                <View style={styles.pageViewStyle}>
                    {this.renderPage()}
                </View>
            </View>
        );
    },
    BeginDrag(){
        //停止定时器
        this.clearInterval(this.timer);
    },
    EndDrag(){
        //开启定时器
        this.startTimer();
    },
    //实现一些复杂操作
    componentDidMount(){
      //开启定时器
        this.startTimer();
    },
    //实现定时器
    startTimer(){
        //得到scrollView
        var scrollView = this.refs.scrollView;
        var imgsArr = ImageData.data;
        //添加定时器
       this.timer = this.setInterval(function () {
            //设置圆点
            var activePage = 0;
            //判断
            if((this.state.currentPage+1) >= imgsArr.length){//越界
               activePage = 0;
            }else{
               activePage = this.state.currentPage + 1;
            }
            //更新状态机
            this.setState({
               currentPage:activePage
            });
            //让scorllView动起来
            var offsetX = activePage * width;
            scrollView.scrollResponderScrollTo({x:offsetX,y:0,animation:true});

        },this.props.duration);
    },
    //返回图片
    readerAllImage(){
        //数组
        var allImage = [];
        //拿到图片数组
        var imgsArr = ImageData.data;
        //遍历
        for(var i=0; i<imgsArr.length;i++){
            //去除单独的image
            var imgItem = imgsArr[i];
            //创建组件装入数组
            allImage.push(
                <Image key={i} source={{uri:imgItem.img}} style={{width:width,height:120}}/>
            );
        }
        //返回数组
        return allImage;
    },
    //返回圆点
    renderPage(){
        //定义一个数组放置所有圆点
        var indicatorArr = [];
        //拿到图片数组
        var imgsArr = ImageData.data;
        //圆点颜色style
        var style;
        //遍历
        for(var i = 0;i<imgsArr.length;i++){
            //判断
            style = (i==this.state.currentPage) ? {color:'red'} : {color:'white'}
            //装载进数组中
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    },
    //当一帧结束时,调用
    onAnimationEnd(e){
        //求出水平方向的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        //求出当前的page
        var currentPage =  Math.floor(offSetX/width);
        //更新状态机,修改绘制UI
        this.setState({
           currentPage : currentPage
        });
     }
});

const styles = StyleSheet.create({
  container:{
   marginTop:20
  },
  scrollViewStyle:{

  },
  pageViewStyle: {
    width:width,
    height:25,
    backgroundColor:'rgba(0,0,0,0)',
    position:'absolute',//绝对定位
    bottom:0,
    bottom:0,
    flexDirection:'row',//主轴方向
    alignItems:'center'
  }
});

AppRegistry.registerComponent('Project', () => Project);
