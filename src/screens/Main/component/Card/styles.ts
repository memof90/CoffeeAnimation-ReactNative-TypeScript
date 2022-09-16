import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const Styles = StyleSheet.create({
    container: {
       marginTop: 16,
       marginHorizontal: 32,
       height: width, 
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    caption: {
        marginHorizontal: 24,
        padding: 24,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginBottom: 16
    },
    text: {
        fontFamily: "Nunito_500Medium",
        fontSize: 16,
        textAlign: "center",
        color: "#432406"
    },
});

export default Styles;