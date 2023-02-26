import { StyleSheet } from "react-native";
import { colors } from "../../constants";
export const styles = StyleSheet.create({
    keybordContainer:{
        flex:1
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
    },
    buttonContainer:{
        width: '75%',
        marginTop:15,
    },
    title:{
        fontSize:22,
        fontFamily: 'AbhayaLibre-SemiBold',
        color: colors.black,
        marginBottom:15,
    }, 
    containerFoot:{
        width:'45%',
        justifyContent:'center',
        marginTop:15,
    },
    promptButton:{
        width:'55%',
        borderColor:colors.black,
        borderWidth:0.5,
        padding:10,
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    prompt:{
        width:'100%',
        alignItems:'center',
    },
    promptMessage:{
        fontFamily: 'AbhayaLibre-Regular',
        fontSize:14,
        color: colors.black,
    },
});