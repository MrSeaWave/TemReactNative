/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TestTextBaseline from "./src/pages/TestTextBaseline/TestTextBaseline";
// import TestQRCode from "./src/pages/TestQRCode/TestQRCode";
import TestWebView from './src/pages/TestWebView/TestWebView'
import FixTextBaseline from './src/pages/TestTextBaseline/FixTextBaseline'
// import TestWebViewThird from './src/pages/TestWebView/TestWebViewThird'
import TestTextInputSecureTextEntry from './src/pages/TestTextInputSecureTextEntry/TestTextInputSecureTextEntry'


export default class App extends Component<Props> {
    render() {
        return <TestTextInputSecureTextEntry/>;
    }
}
