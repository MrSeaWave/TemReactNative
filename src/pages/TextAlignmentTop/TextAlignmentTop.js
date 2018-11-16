// 文字顶部对齐

import React, { Component } from 'react'
import { View, Text } from 'react-native'

class TextAlignmentTop extends Component {
  render() {
    return (
      <View
        style={{
          width: 200,
          height: 30,
          backgroundColor: 'green',
          flexDirection: 'row',
          alignItems: 'flex-start'
        }}
      >
        <Text style={{ fontSize: 12, backgroundColor: 'red', lineHeight: 12 }}>HHHHHHH</Text>
        <Text style={{ fontSize: 26, backgroundColor: 'blue', lineHeight: 26 }}>HHHHHH</Text>
      </View>
    )
  }
}

export default TextAlignmentTop
