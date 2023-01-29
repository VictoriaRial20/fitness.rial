import { StyleSheet } from "react-native";
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container:{
        height:'80%',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:18,
        fontFamily: 'AbhayaLibre-bold',
        color: colors.text,
    },
    buttonContainer:{
        width: '60%',
        height: '15%',
        justifyContent:'space-between',
        marginTop: 20,
        marginBottom:15,
    },
    footButton:{
        fontFamily: 'AbhayaLibre-Medium',
        fontSize:12,
        color: colors.text,
    },
});