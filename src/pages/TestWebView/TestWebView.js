/*
* RN：0.57.3
* */
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, WebView } from 'react-native'

class TestWebView extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }
  onChange = () => {
    this.setState(preState => ({ visible: !preState.visible }))
  }

  render() {
    console.log('Test',)
    const { visible } = this.state
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#CCCCFF'
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: '#E3C07B', height: 50, width: 100 }}
          onPress={this.onChange}
        >
          <Text>Show WebView</Text>
        </TouchableOpacity>
        {visible ? (
          <View style={{ height: 150, width: 150,overflow:'hidden' }}>
            <WebView
              source={{ uri: 'https://github.com/facebook/react-native' }}
              scalesPageToFit={true}
              onLoad={(e) => console.log('onLoad')}
              onLoadEnd={(e) => console.log('onLoadEnd')}
              onLoadStart={(e) => console.log('onLoadStart')}
              startInLoadingState={true}
              renderError={() => {
                console.log('renderError')
                return <View><Text>renderError回调了，出现错误</Text></View>
              }}
              renderLoading={() => {
                return <View><Text>这是自定义Loading...</Text></View>
              }}
            />
          </View>
        ) : null}
      </View>
    )
  }
}

export default TestWebView
