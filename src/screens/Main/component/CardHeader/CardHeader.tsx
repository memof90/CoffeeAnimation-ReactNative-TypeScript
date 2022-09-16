//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';
import { Feather as Icon } from '@expo/vector-icons'


// create a component
const CardHeader = () => {
    return (
        <View style={Styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={Styles.title}>
                    RECOMMEND
                </Text>
                <View style={Styles.action}>
                    <Icon name='edit' size={16} />
                </View>
            </View>
        </View>
    );
};

//make this component available to the app
export default CardHeader;
