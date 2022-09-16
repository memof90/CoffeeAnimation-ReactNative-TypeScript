//import liraries
import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
  } from "react-native-reanimated";

import { Products } from "../Utils/Model";

import Styles from "./styles";

interface ProductsProps {
   x: Animated.SharedValue<number>; 
}

// create a component
const MainProduct = ({ x }: ProductsProps) => {
    const { width } = Dimensions.get("window");
    const SIZE = 100;

    return (
        <View style={Styles.container} pointerEvents="none">
            {Products.map((product, index) => {
                const style = useAnimatedStyle(() => {
                    const translateX = interpolate(
                        x.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [width / 2, 0, -width / 2]
                    );
                    const scale = interpolate(
                        x.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [0.61, 1, 0.61]
                    );
                    return {
                        transform: [{ translateX }, { scale }],
                    };
                });
                return (
                    <Animated.View key={index} style={[Styles.container, style]}>
                        <Image 
                            source={product.picture}
                            style={{
                                marginTop: 50,
                                width: SIZE,
                                height: SIZE * product.aspectRatio
                            }}
                        />
                    </Animated.View>
                )
            })}
        </View>
    );
};

//make this component available to the app
export default MainProduct;
