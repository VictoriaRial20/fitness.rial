import { Button, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { signIn, signUp } from '../../store/actions/index';

import React from "react";
import { colors } from '../../constants';
import { styles } from "./styles";
import { useDispatch } from'react-redux';
import { useState } from 'react';

const image = { uri: 'https://img.freepik.com/foto-gratis/hombre-cuerda-entrenamiento-funcional_136403-6825.jpg?size=626' };

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const title = isLogin ? 'Login' : 'Register';
    const message = isLogin ? 'Dont have an account?' : 'Already have an account';
    const messageButton = isLogin ? 'Login' : 'Register';

    const onHandlerSubmit = () => {
        //console.log(email, password)
        dispatch( isLogin ? signIn(email, password) : signUp(email,password))
    };
    return (
        <KeyboardAvoidingView style={styles.keybordContainer} behavior={Platform.OS === 'android' ? 'height' : 'padding'} enabled>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder='Email'
                            //maxLength={10}
                            placeholderTextColor={colors.black}
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        >
                        </TextInput>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder='Password'
                            maxLength={8}
                            placeholderTextColor={colors.black}
                            secureTextEntry
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        >
                        </TextInput>
                    </View >
                    <View style={styles.buttonContainer}>
                        <Button
                            title={messageButton}
                            onPress={onHandlerSubmit}
                            color={colors.primary}
                        />
                    </View>
                    <View style={styles.prompt}>
                        <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.promptMessage}>{message}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login;
