/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 2016-09-27
 * StatusBar状态栏
 *
 **/


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';

class  Project extends  Component{
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                   // hidden = {true}  //status显示与隐藏
                   // backgroundColor = 'red'  //status栏背景色,仅支持安卓
                   // translucent = {true} //设置status栏是否透明效果,仅支持安卓
                   //  barStyle = 'light-content' //设置状态栏文字效果,仅支持iOS,枚举类型:default黑light-content白
                    networkActivityIndicatorVisible = {true} //设置状态栏上面的网络进度菊花,仅支持iOS
                    showHideTransition = 'slide' //显隐时的动画效果.默认fade
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('Project', () => Project);
