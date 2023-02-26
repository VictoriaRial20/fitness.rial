import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        marginStart:25,
        marginBottom:2
    },
    label:{
        color: colors.black,
        fontFamily: 'AbhayaLibre-Regular',
        fontSize:16,
    },
    subLabel: {
        fontSize: 12,
        fontFamily: 'AbhayaLibre-Regular',
        color: colors.black,
    }
});