import { Button, Text, View } from "react-native";
import React, { useState } from "react";

import { styles } from "./styles";

const Principal = ({onHandleLogin}) => {
    const onHandlerLogin = () =>{
        onHandleLogin(true)
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>*LOGO*</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Sign Up"
                    onPress={() => {}}
                    color='#A1C6EA' />

                <Button
                    title="Login"
                    onPress={onHandlerLogin}
                    color='#B6C7CB' />
            </View>
            <Text style={styles.footButton}>Forget the password</Text>
        </View>
    )
};

export default Principal;