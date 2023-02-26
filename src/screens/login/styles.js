import { StyleSheet } from "react-native";
import { colors } from "../../constants";
export const styles = StyleSheet.create({
    keybordContainer:{
        flex:1
    },
    container:{
        flex:1,
        height:'80%',
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        flex:1,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
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
        borderBottomWidth: 1,
        borderBottomColor: colors.black,
        paddingTop:10,
        width: 140,
        marginTop:5,
        fontSize:16,
        fontFamily: 'AbhayaLibre-Regular',
    },
    buttonContainer:{
        width: '70%',
        marginTop:15,
    },
    title:{
        fontSize:20,
        fontFamily: 'AbhayaLibre-SemiBold',
        color: colors.primary,
        marginBottom:15,
    }, 
    containerFoot:{
        width:'45%',
        justifyContent:'center',
        marginTop:15,
    },
    promptButton:{
        width:'50%',
        backgroundColor: colors.black,
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
        color: colors.white,
    },
    
});