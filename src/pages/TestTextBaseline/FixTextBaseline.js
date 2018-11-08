/*
* RN：0.57.3
* */
import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FixTextBaseline extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>
            <Text style={{ fontSize: 65, backgroundColor: '#ff9c6e' }}>1</Text>
            <Text style={{ fontSize: 55, backgroundColor: '#ff9c6e' }}>1</Text>
            <Text style={{ fontSize: 45, backgroundColor: '#ff9c6e' }}>1</Text>
            <Text style={{ fontSize: 35, backgroundColor: '#ff9c6e' }}>1</Text>
            <Text style={{ fontSize: 25, backgroundColor: '#ff9c6e' }}>1</Text>
          </Text>
        </View>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
    // alignItems: 'baseline'
  }
})
