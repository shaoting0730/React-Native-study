/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 demo1
 * 2016-09-23
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
//引入外部组件
var Main = require('./Component/Main');
class Project extends Component {
    render() {
        return (
            <Main />
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