//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Styles from './styles';

interface ButtonProps {
    label: string;
}

// create a component
const Button = ( { label } : ButtonProps ) => {
    return (
        <TouchableNativeFeedback>
            <View style={Styles.container}>
                <Text style={Styles.label}>{label}</Text>
            </View>  
        </TouchableNativeFeedback>
    );
};

//make this component available to the app
export default Button;
