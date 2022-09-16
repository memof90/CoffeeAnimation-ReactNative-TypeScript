import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles';

interface CardsProps {
    picture: ReturnType<typeof require>;
    caption: string;
}

// create a component
const Card = ( { picture, caption }: CardsProps ) => {
    return (
        <>
            <View style={Styles.container}>
                <Image source={picture} style={Styles.image} />
            </View>
            <View style={Styles.caption} >
                <Text style={Styles.text}>{caption}</Text>
            </View>
        </>
    );
};


//make this component available to the app
export default Card;
