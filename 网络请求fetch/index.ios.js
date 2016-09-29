/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 2016-09-28
 * fetch请求数据 header 参数 response转json 请求方式
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var Project = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.ssss}>
                    <Text>访问</Text>
                </TouchableOpacity>
            </View>
        );
    },
    ssss(){
        fetch('http://www.pintasty.cn/home/homedynamic', {
            method: 'POST',
            headers: { //header
                'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJVLTliZGJhNjBjMjZiMDQwZGJiMTMwYWRhYWVlN2FkYTg2IiwiZXhwaXJhdGlvblRpbWUiOjE0NzUxMTg4ODU4NTd9.ImbjXRFYDNYFPtK2_Q2jffb2rc5DhTZSZopHG_DAuNU'
            },
            body: JSON.stringify({ //参数
                'start': '0',
                'limit': '20',
                'isNeedCategory': true,
                'lastRefreshTime': '2016-09-25 09:45:12'
            })
        })
            .then((response) => response.json()) //把response转为json
            .then((responseData) => { // 上面的转好的json
                    alert(responseData); /
                // console.log(responseData);
            })
            .catch((error)=> {
                alert('错误了');
            })
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('Project', () => Project);

