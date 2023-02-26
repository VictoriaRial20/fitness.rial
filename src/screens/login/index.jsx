import { Button, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { UPDATED_FORM, onInputChange } from '../../utils/form';
import { signIn, signUp } from '../../store/actions/index';
import { useReducer, useState } from 'react';

import { Input } from '../../components/index';
import React from "react";
import { colors } from '../../constants';
import { styles } from "./styles";
import { useDispatch } from'react-redux';

const image = { uri: 'https://img.freepik.com/foto-gratis/hombre-cuerda-entrenamiento-funcional_136403-6825.jpg?size=626' };

const initialState = {
    email: {value: '', error: '', touched: false, hasError: true},
    password: {value: '', error: '', touched: false, hasError: true},
    isFormValid: false,
};

const formReducer = (state, action) => {
    switch(action.type) {
        case UPDATED_FORM:
            const {name, value, hasError, error, touched, isFormValid} = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid,
            }
        default:
            return state;
    }
};

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const title = isLogin ? 'Login' : 'Register';
    const message = isLogin ? 'Dont have an account?' : 'Already have an account';
    const messageButton = isLogin ? 'Login' : 'Register';

    const onHandlerSubmit = () => {
        dispatch( isLogin 
            ? signIn(formState.email.value, formState.password.value) 
            : signUp(formState.email.value, formState.password.value))
    };

    const onHandleInputChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }
    return (
        <KeyboardAvoidingView style={styles.keybordContainer} behavior={Platform.OS === 'android' ? 'height' : 'padding'} enabled>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.textInputContainer}>
                        <Input
                            keyboardType="default"
                            placeholder='Enter your email'
                            //maxLength={10}
                            placeholderTextColor={colors.black}
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(text) => onHandleInputChange(text, 'email')}
                            value={formState.email.value}
                            hasError={formState.email.hasError}
                            error={formState.email.error}
                            touched={formState.email.touched}
                            label="Email"
                            labelStyle={styles.label}
                        >
                        </Input>
                        <Input
                            keyboardType="default"
                            placeholder='Enter your password'
                            maxLength={8}
                            placeholderTextColor={colors.black}
                            secureTextEntry
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(text) => onHandleInputChange(text, 'password')}
                            value={formState.password.value}
                            hasError={formState.password.hasError}
                            error={formState.password.error}
                            touched={formState.password.touched}
                            label="Password"
                            labelStyle={styles.label}
                            //error='Password is required'
                        >
                        </Input>
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
