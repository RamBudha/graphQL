/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = () =>{
    return (
        <View style={style.container}>
        <Text>Albums!</Text>
        </View>
    )
}
const style = {
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f8f8f8",
        height: 60,
        paddingTop: 15,
        shadowColor: "red",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5
    
      },
    // textStyle = {
    //     fontSize : 50,
    //     backgroundColor : "red",
    //     justifyContent: 'center', //flex-start, flex-end
    //     alignItem: 'center', //flex-start, flex-end,
    //     height: 60,
    // paddingTop: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.5
    // }
}



export default Header;