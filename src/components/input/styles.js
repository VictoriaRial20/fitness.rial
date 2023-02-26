import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingStart:20,
        paddingEnd:20,
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingTop:10,
        width: 300,
        marginTop:5,
        marginBottom:5,
        fontSize:13,
        fontFamily: 'AbhayaLibre-Regular',
    },
    message:{
        marginVertical:5,
    },
    helperText:{
        fontSize:12,
        fontFamily:'AbhayaLibre-Regular',
        color: colors.error,
    },
});