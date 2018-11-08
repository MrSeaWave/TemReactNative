/*
* RN：0.57.4
* */
import React, { Component } from 'react'
import { TextInput, View } from 'react-native'

class TestTextInputSecureTextEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    const { value } = this.state
    const color = value === '123456' ? 'green' : value === '1234' ? 'red' : 'black'
    console.log('this.state.value:', this.state.value)
    console.log('color:', color)
    return (
      <View
        style={{ backgroundColor: '#ccf', justifyContent: 'center', alignItems: 'center', flex: 1 }}
      >
        <TextInput
          // selectionColor={color}
          style={{ color: color, borderBottomWidth: 1, borderColor: color, width: '100%' }}
          secureTextEntry={true}
          value={value}
          onChangeText={text => {
            this.setState({ value: text })
          }}
        />
      </View>
    )
  }
}

export default TestTextInputSecureTextEntry
