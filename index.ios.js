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

import HomeScreen from './common/components/HomeScreen';
import BrowseScreen from './common/components/BrowseScreen';
import CameraScreen from './common/components/CameraScreen';
import HistoryScreen from './common/components/HistoryScreen';
import AccountScreen from './common/components/AccountScreen';

const TabBar = TabNavigator({
    Home: {screen: HomeScreen},
    Browse: {screen: BrowseScreen},
    Camera: {screen: CameraScreen},
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

class LitApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            has_photo: false,
            photo: null,
        };
    }

    render() {
        return (
            <View style={styles.fullScreen}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <TabBar screenProps={this.state} ref={nav => { this.navigator = nav; }}/>
                <TouchableHighlight onPress={this._onPressButton.bind(this)} style={styles.camera_button} underlayColor="#2467DE">
                    <Image source={require('./common/assets/camera.png')} style={styles.camera_icon}/>
                </TouchableHighlight>
            </View>
        );
    }

    _onPressButton() {

        ImagePicker.showImagePicker(image_picker_options, (response) => {

            if(response.error){
                alert(response.error);
                // alert('Error getting the image. Please try again.');
            }else{

                let source = {uri: response.uri};

                this.setState({
                    has_photo: true,
                    photo: source,
                    photo_data: response.data
                });

                // TODO figure this out...
                this.navigator && this.navigator.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Browse'});
                this.navigator && this.navigator.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Home'});
            }
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

AppRegistry.registerComponent('LitApp', () => LitApp);
