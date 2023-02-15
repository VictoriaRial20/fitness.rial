import { StyleSheet } from "react-native";
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize: 20,
        fontFamily: 'AbhayaLibre-Medium',
        marginBottom:15,
        borderBottomWidth:1,
    },
    exercise:{
        fontSize: 18,
        fontFamily: 'AbhayaLibre-Regular',
    },
    weight:{
        fontSize: 20,
        fontFamily: 'AbhayaLibre-Medium',
    },
    reps:{
        fontSize: 20,
        fontFamily: 'AbhayaLibre-Medium',
    },
    time:{
        fontSize: 16,
        fontFamily: 'AbhayaLibre-Medium',
    },
});