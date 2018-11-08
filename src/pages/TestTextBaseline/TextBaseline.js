/*
* RN：0.57.3
* */
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TextBaseline extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[{ fontSize: 64 }, styles.blockLevelText]}>
            1
          </Text>
          <Text style={[{ fontSize: 60 }, styles.blockLevelText]}>
            1
          </Text>
          <Text style={[{ fontSize: 46 }, styles.blockLevelText]}>
            1
          </Text>
          <Text style={[{ fontSize: 42 }, styles.blockLevelText]}>
            1
          </Text>
          <Text style={[{ fontSize: 38 }, styles.blockLevelText]}>
            1
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text>
            <Text style={[{ fontSize: 64 }, styles.lineLevelText]}>
              M
            </Text>
            <Text style={[{ fontSize: 60 }, styles.lineLevelText]}>
              M
            </Text>
            <Text style={[{ fontSize: 46 }, styles.lineLevelText]}>
              M
            </Text>
            <Text style={[{ fontSize: 42 }, styles.lineLevelText]}>
              M
            </Text>
            <Text style={[{ fontSize: 38 }, styles.lineLevelText]}>
              M
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  lineLevelText: {
    backgroundColor: '#faa',
  },
  blockLevelText: {
    backgroundColor: '#aaf',
  },
  textContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'baseline',
    margin: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
