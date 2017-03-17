import React, { Component } from 'react';
import {
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

const homeIcon = require('../assets/browse-icon.png');

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Browse',
      icon: ({ tintColor }) => (
        <Image
          source={homeIcon}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A4F4',
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 128,
    height: 51
  }
});

module.exports = HomeScreen;
