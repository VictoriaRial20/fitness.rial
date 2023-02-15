import { StatusBar, StyleSheet } from "react-native";

import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        marginTop: StatusBar.currentHeight,
    },
    containerList:{
        flex:1,
        marginTop:200,
    },
});