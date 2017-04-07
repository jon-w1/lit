/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import {
    TabNavigator,
} from 'react-navigation';

const ImagePicker = require('react-native-image-picker');

import HomeScreen from './HomeScreen';
import BrowseScreen from './BrowseScreen';
import EmptyScreen from './EmptyScreen';
import HistoryScreen from './HistoryScreen';
import AccountScreen from './AccountScreen';

const TabBar = TabNavigator({
    Home: {screen: HomeScreen},
    Browse: {screen: BrowseScreen},
    Space: {screen: EmptyScreen},
    History: {screen: HistoryScreen},
    Account: {screen: AccountScreen},
});


const image_picker_options = {
    title: 'Take a Photo of Your Light Bulb',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class MainApp extends React.Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.fullScreen}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <TabBar ref={nav => { this.navigator = nav; }}/>
                <TouchableHighlight onPress={() => navigate('Camera')} style={styles.camera_button} underlayColor="#2467DE">
                    <Image source={require('../assets/camera.png')} style={styles.camera_icon}/>
                </TouchableHighlight>
            </View>
        );
    }

    _onPressButton() {
        this.navigator && this.navigator.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: 'Camera'
        });
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    camera_button: {
        borderRadius: 50,
        width: 65,
        height: 65,
        backgroundColor: '#3578EF',
        position: 'absolute',
        bottom: 15,
        left: '50%',
        marginLeft: -32.5,
        shadowOffset: {
            width: 0,
            height: 15
        },
        shadowColor: '#3578EF',
        shadowRadius: 17,
        shadowOpacity: 0.8
    },
    camera_icon: {
        width: 25,
        height: 23,
        alignSelf: 'center',
        marginVertical: 20
    }
});

module.exports = MainApp;
