import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
export const CARD_HEIGHT = width * 1.25;

const Styles = StyleSheet.create({
    container: {
       width,
       height: CARD_HEIGHT, 
    },
    title: {
        fontFamily: "Nunito_700Bold",
        fontSize: 20,
        textAlign: "center",
        color: "#432406",
        marginBottom: 16
    },
    subtitle: {
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
        textAlign: "center",
        color: "#432406"
    },
});

export default Styles;