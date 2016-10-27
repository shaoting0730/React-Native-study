/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 项目的基本结构 Tabbar NagationBar 网络请求
 * 2016-09-23
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var Home = require('../Component/Home');
var Find = require('../Component/Find');
var Message = require('../Component/Message');
var Mine = require('../Component/Mine');

var Main = React.createClass({
    //初始化方法
    getInitialState(){
        return{
            //默认选中第一个
            selectedItem: 'home'
        }
    },
    render() {
        return (
            <TabBarIOS
                tintColor = 'orange'
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_home')}
                    title = "首页"
                    selected = {this.state.selectedItem == 'home'}
                    onPress={()=>{this.setState({selectedItem:'home'})}}
                >
                    <NavigatorIOS
                        tintColor = 'orange'
                        style={{flex:1}}
                      initialRoute = {
                        {
                            component:Home, //具体的版块
                            title:"首页",
                            leftButtonIcon:require('image!navigationbar_friendattention'),
                            rightButtonIcon:require('image!navigationbar_pop')
                        }
                      }
                    />
                </TabBarIOS.Item>

                {/*发现*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_discover')}
                    title = "发现"
                    selected = {this.state.selectedItem == 'find'}
                    onPress={()=>{this.setState({selectedItem:'find'})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute = {
                            {
                                component:Find,
                                title:"发现"
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_message_center')}
                    title = "消息"
                    selected = {this.state.selectedItem == 'message'}
                    onPress={()=>(this.setState({selectedItem:'message'}))}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute = {
                            {
                                component:Message,
                                title:"消息"
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*我的*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_profile')}
                    title = "我的"
                    selected = {this.state.selectedItem == 'mine'}
                    onPress={()=>{this.setState({selectedItem:'mine'})}}
                >
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute = {
                        {
                            component:Mine,
                            title:"我的"
                        }
                    }
                   />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
});
const  styles = StyleSheet.create({

});
//输出类
module.exports = Main;