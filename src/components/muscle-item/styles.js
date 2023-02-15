import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:10,
        height:120,
        backgroundColor: colors.white,
    },
    contentContainer:{
        flex:1,
        justifyContent:'space-around', 
        alignItems:'center',
    },        
    title:{
        fontSize:20,
        fontFamily:'AbhayaLibre-SemiBold',
        color: colors.secondary,
    },
    muscleZone:{
    },
    time:{
        fontSize:18,
        fontFamily:'AbhayaLibre-SemiBold',
        color: colors.secondary,
    },
});