import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  _onPressLoginButton() {
    Alert.alert('Login button')
  }

  render() {
    return (
      <View>
      <Text>Login</Text>
        <TextInput
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}/>
        <TextInput
          placeholder="password"
          onChangeText={(password) => this.setState({password})}/>
        <Button
          onPress={this._onPressLoginButton}
          title="Login"
        />
      </View>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
