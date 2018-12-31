import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const chatIcon = require('../assets/account-icon.png')

class CartScreen extends React.Component {
  static navigationOptions = {
      header: {
          title: 'Cart',
          tintColor: 'white',
          style: {
              backgroundColor: '#00A4F4'
          },
      },
      headerBackTitle: 'Back',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Cart Screen</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back"
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
    width: 20,
    height: 20,
  },
});

module.exports = CartScreen;
