import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,

    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        width: 350,
        marginTop:5,
        marginBottom:5,
        fontSize:13,
        fontFamily: 'AbhayaLibre-Regular',
    },
    label:{
        color: colors.black,
        fontFamily: 'AbhayaLibre-Regular',
        fontSize:16,
        marginTop:10,
    },
});