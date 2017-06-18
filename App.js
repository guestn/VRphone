import React from 'react';
import { StyleSheet, Text, View, WebView, TouchableHighlight, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '192.168.0.113:3000/vrdemo.html',
      uri: 'google.com',
      inputsShown: false
    }
  }

  onClickButton = () => {
    this.setState({inputsShown: !this.state.inputsShown })
  }
  onSubmitUri = () => {
    this.setState({
      uri: this.state.textInput,
      inputsShown: false
    })
  }
  onUriError = () => {
    this.setState({
      uri: 'google.com',
      inputsShown: false
    })
  }

  render() {
    return (
      <View style={s.container}>
        <WebView  style={s.webview}
          source={{uri: 'http://' + this.state.uri}}
          onError={this.onUriError}
        />
        <TouchableHighlight style={s.button} onPress={this.onClickButton}>
          <Text>s</Text>
        </TouchableHighlight>
        {this.state.inputsShown ?
          <View>
            <TextInput
              style={s.textInput}
              onChangeText={(textInput) => this.setState({textInput})}
              value={this.state.textInput}
              autoCapitalize="none"
            />
            <TouchableHighlight style={s.submitButton} onPress={this.onSubmitUri}>
              <Text>GO</Text>
            </TouchableHighlight>
          </View> :
          null
        }
      </View>

    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  webview: {
    flex: 1,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'red'
  },
  button: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    width: 40,
    height:40,
    backgroundColor: 'rgba(255,205,205,0.8)'
  },
  textInput: {
    position: 'absolute',
    bottom: 320,
    left: 50,
    right: 110,
    backgroundColor: 'rgba(255,255,255,0.9)',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10
  },
  submitButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 320,
    right: 5,
    width: 100,
    backgroundColor: 'rgba(255,0,0,1)',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
