import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const image_picker_options = {
    title: 'Select Avatar',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

import Detector from './Detector';

const homeIcon = require('../assets/home-icon.png');

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
      icon: ({ tintColor }) => (
        <Image
          source={homeIcon}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    let spinner = null;
    if (false) {
        spinner = (
            <View>
                <Text style={styles.searching}>Analyzing...</Text>
                <ActivityIndicator
                    animating={true}
                    style={styles.spinner}
                    color="white"
                    size="large"
                />
                <Button onPress={this._onClose().bind(this)}>Close</Button>
            </View>
        );
    }
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>
    );
  }

  _onClose() {
      alert('Closed');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A4F4',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 128,
    height: 51
  },
  spinner: {
    height: 80
  },
  searching: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'transparent'
  }
});

module.exports = HomeScreen;
