import { StyleSheet } from "react-native";
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:100,
        paddingTop:100,
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