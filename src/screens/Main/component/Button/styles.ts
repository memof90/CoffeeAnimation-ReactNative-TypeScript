import { StyleSheet, Dimensions } from 'react-native';

const width = (Dimensions.get('window').width - 64 / 2);

 const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#432406",
        padding: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 27,
        height: 54,
        width: width
    },
    label: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Nunito_700Bold",
        alignSelf: "center"
    },
});

export default Styles;