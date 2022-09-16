import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        marginBottom: 16,
        alignItems: "center"
    },
    title: {
        fontFamily: "Nunito_500Medium",
        alignSelf: "center"
    },
    action: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "center"
    },
});

export default Styles;