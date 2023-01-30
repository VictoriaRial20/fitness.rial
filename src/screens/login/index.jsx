import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import React from "react";
import { colors } from '../../constants';
import { styles } from "./styles";

const Login = () => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.container}>
                <Text style={styles.titleLogin}>Enter usarname and password</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType="default"
                        placeholder='User'
                        maxLength={10}
                    >
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        keyboardType="default"
                        placeholder='Password'
                        maxLength={8}
                    >
                    </TextInput>
                </View >
                <View style={styles.buttonContainer}>
                    <Button
                        title='LOGIN'
                        onPress={() => { }}
                        color={colors.secondary}
                    />
                </View>


            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login;
