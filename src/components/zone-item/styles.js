import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 155,

    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitle: {},
    title: {
        fontSize: 24,
        fontFamily: 'AbhayaLibre-SemiBold',
        color: colors.primary,
        marginBottom: 50,
        //backgroundColor:colors.white,
        //padding:2,
    },
    image: {
        flex: 1,
    }
});