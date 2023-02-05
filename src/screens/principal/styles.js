import { StyleSheet } from "react-native";
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'80%',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:18,
        fontFamily: 'AbhayaLibre-bold',
        color: colors.white,
    },
    buttonContainer:{
        width: '60%',
        height: '15%',
        justifyContent:'space-around',
        marginTop: 5,
    },
    image: {
        flex:1,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
      },
});