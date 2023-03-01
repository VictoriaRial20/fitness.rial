import { StyleSheet } from "react-native";
import { colors } from "../../constants";
export const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
    },
    preview: {
        width: "100%",
        height: 180,
        marginBottom: 20, 
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 0.7,
    },
    
    image:{
        width:"100%",
        height:"100%",
    },

    textPreview:{
        fontFamily:'AbhayaLibre-Regular',
        fontSize:14,
    },
});