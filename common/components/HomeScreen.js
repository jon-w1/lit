import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat')}
          title="Go to chat screen"
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
});

module.exports = HomeScreen;
