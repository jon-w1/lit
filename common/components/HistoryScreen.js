import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const chatIcon = require('../assets/history.png')

class HistoryScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'History',
      icon: ({ tintColor }) => (
        <Image
          source={chatIcon}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Chat Screen</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
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
  tabIcon: {
    width: 17,
    height: 17,
  },
});

module.exports = HistoryScreen;
