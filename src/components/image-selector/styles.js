import { StyleSheet } from "react-native";
import { colors } from "../../constants";
export const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:15,
    },
    preview: {
        width: "100%",
        height: 150,
        marginBottom: 20, 
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 0.6,
    },
    
    image:{
        width:"100%",
        height:"100%",
    },

    textPreview:{
        fontFamily:'AbhayaLibre-Regular',
        fontSize:14,
    },
    button:{
        marginLeft:20,
        marginRight:20,
    }
});