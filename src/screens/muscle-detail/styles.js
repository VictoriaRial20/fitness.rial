import { StyleSheet } from "react-native";
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.secondary,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize: 22,
        fontFamily: 'AbhayaLibre-Medium',
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:colors.white,
        color:colors.white,
    },
    exercise:{
        fontSize: 20,
        fontFamily: 'AbhayaLibre-Regular',
        color:colors.white,
    },
    weight:{
        fontSize: 20,
        fontFamily: 'AbhayaLibre-Medium',
        color:colors.white,
    },
    reps:{
        fontSize: 20,
        fontFamily: 'AbhayaLibre-Medium',
        color:colors.white,
    },
    time:{
        fontSize: 16,
        fontFamily: 'AbhayaLibre-Medium',
        color:colors.white,
    },
});