//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardHeader from './component/CardHeader';

// create a component
const Main = () => {
    return (
        <View style={styles.container}>
            <CardHeader />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
});

//make this component available to the app
export default Main;
