import { StyleSheet } from "react-native";
import { colors } from "../../constants";
export const styles = StyleSheet.create({
    container:{
        height:'80%',
        alignItems:'center',
        justifyContent:'center',
    },
    textInputContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:15,
        paddingStart:20,
        paddingEnd:20,
    },
    input:{
        borderBottomWidth: 0.5,
        paddingTop:10,
        width: 100,
        marginTop:5,
        fontSize:17,
        fontFamily: 'AbhayaLibre-Regular',
    },
    buttonContainer:{
        width: '70%',
        marginTop:15,
    },
    titleLogin:{
        fontSize:15,
        fontFamily: 'AbhayaLibre-Medium',
        marginBottom:10,
        color: colors.text,
    }, 
});