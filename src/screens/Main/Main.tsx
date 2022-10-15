//import liraries
import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Product, Products } from './Utils/Model';
import { CARD_HEIGHT } from './MainCards/styles';
import MainCards from './MainCards/MainCards';
import MainProduct from './MainProduct';
import Cards from './component/Cards/Cards';
import Styles from './styles';
import Animated, {
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    interpolateColor,
  } from "react-native-reanimated";



// create a component
const Main = () => {
    const { width } = Dimensions.get("window");
    const snapToOffsets = [0, CARD_HEIGHT];
    const translateX = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            translateX.value = event.contentOffset.x;
        }
    });
    const style = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            translateX.value,
            Products.map((_, i) => width * i),
            Products.map((product) => product.color2)
        ) as string
        return { flex: 1, backgroundColor}
    });

    return (
        <Animated.View style={style}>
            <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            snapToOffsets={snapToOffsets}
            snapToEnd={false}
            decelerationRate="fast"
            >
                <View style={Styles.slider}>
                    <Animated.ScrollView
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    decelerationRate="fast"
                    snapToInterval={width}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                        {Products.map((product, index) => (
                            <MainCards product={product} key={index}/>
                        ))}
                    </Animated.ScrollView>
                    <MainProduct x={translateX}/>
                </View>
                <Cards />
            </ScrollView>
        </Animated.View>
    );
};

//make this component available to the app
export default Main;
