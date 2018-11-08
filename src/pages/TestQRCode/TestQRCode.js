/*
* RN：0.57.3
* */

import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode'

class TestQRCode extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }
  onChange = () => {
    this.setState(preState => ({ visible: !preState.visible }))
  }

  render() {
    const {visible} = this.state
    console.log(this.state.isvisible)
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
          <Text>Show QRCode</Text>
        </TouchableOpacity>
        {visible ? <QRCode /> : null}
      </View>
    )
  }
}

export default TestQRCode
