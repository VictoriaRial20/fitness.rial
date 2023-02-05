import { StyleSheet } from "react-native";
import { colors } from "../../constants";
export const styles = StyleSheet.create({
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
        borderBottomColor: colors.white,
        paddingTop:10,
        width: 100,
        marginTop:5,
        fontSize:18,
        fontFamily: 'AbhayaLibre-Regular',
    },
    buttonContainer:{
        width: '70%',
        marginTop:15,
    },
    titleLogin:{
        fontSize:17,
        fontFamily: 'AbhayaLibre-Medium',
        color: colors.white,
    }, 
    footText:{
        fontFamily: 'AbhayaLibre-Medium',
        fontSize:12,
        color: colors.white,
        marginTop:10,
    },
    containerFoot:{
        width:'45%',
        justifyContent:'center',
        marginTop:15,
    },
    
});