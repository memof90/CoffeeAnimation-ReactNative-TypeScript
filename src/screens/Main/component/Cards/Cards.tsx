//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';
import Card from '../Card/Card';
import DataCards from './Utils/cards';



// create a component
const Cards = () => {
    return (
        <View>
            {DataCards.map(({ picture, caption }, index) => (
                <Card key={index} picture={picture} caption={caption} />
            ))}
        </View>
    );
};


//make this component available to the app
export default Cards;
