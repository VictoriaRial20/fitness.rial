import { StyleSheet } from "react-native";
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:80,
        paddingTop:110,
    },
    title:{
        fontSize:20,
        fontFamily: 'AbhayaLibre-SemiBold',
        color: colors.black,
    }, 
    containerTitle:{
        alignItems:'center',
    }, 
    button:{
        margin:15,
    }
});