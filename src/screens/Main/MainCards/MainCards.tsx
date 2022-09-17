//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Product } from '../Utils/Model';
import Button from '../component/Button/Button';
import Styles from './styles';

interface CardProps {
    product: Product;
}


// create a component
const MainCards = ({ product: { color1, title, subtitle } }: CardProps) => {
    return (
        <View style={Styles.container}>
            <View
                style={{
                    borderRadius: 16,
                    margin: 32,
                    flex: 1,
                    backgroundColor: color1,
                    padding: 16,
                    justifyContent: "space-between"
                }}
            >
                <View>
                    <Text style={Styles.title}>{title}</Text>
                    <Text style={Styles.subtitle}>{subtitle}</Text>
                </View>
                <Button label="I'll try it" />
            </View>
        </View>
    );
};

//make this component available to the app
export default MainCards;
