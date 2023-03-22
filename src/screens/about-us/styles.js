import { StyleSheet } from "react-native";
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        justifyContent:'center',
        alignItems:'center',
    },
    info:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10,
        marginTop:20,

    },
    name:{
        fontSize:18,
        fontFamily: 'AbhayaLibre-SemiBold',
        color: colors.black,
    },
    number:{
        fontSize:14,
        fontFamily: 'AbhayaLibre-Regular',
        color: colors.black,
    },
    email:{
        fontSize:14,
        fontFamily: 'AbhayaLibre-Regular',
        color: colors.black,
    },
});