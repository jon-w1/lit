/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import './shim.js';
import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import MainApp from './common/components/MainApp';
import CameraScreen from './common/components/CameraScreen';
import MatchFound from './common/components/MatchFound';
import CartScreen from './common/components/CartScreen';

const StackNav = StackNavigator({
    Main: {screen: MainApp},
    Camera: {screen: CameraScreen},
    Match: {screen: MatchFound},
    Cart: {screen: CartScreen}
}, {
    mode: 'modal',
});

class LitApp extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.fullScreen}>
                <StackNav ref={nav => { this.navigator = nav; }}/>
                {/*<Button*/}
                    {/*onPress={this._onPressButton.bind(this)}*/}
                    {/*title="Go to Camera"*/}
                {/*/>*/}
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
    }
});

AppRegistry.registerComponent('LitApp', () => LitApp);
