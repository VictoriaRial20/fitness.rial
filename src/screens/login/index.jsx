import { Button, ImageBackground, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import React from "react";
import { colors } from '../../constants';
import { styles } from "./styles";

const image = { uri: 'https://img.freepik.com/foto-gratis/hombre-cuerda-entrenamiento-funcional_136403-6825.jpg?size=626' };

const Login = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                    <Text style={styles.titleLogin}>Enter usarname and password</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder='User'
                            maxLength={10}
                            placeholderTextColor={colors.white}
                        >
                        </TextInput>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder='Password'
                            maxLength={8}
                            placeholderTextColor={colors.white}
                        >
                        </TextInput>
                    </View >
                    <View style={styles.buttonContainer}>
                        <Button
                            title='LOGIN'
                            onPress={() => { }}
                            color={colors.primary}
                        />
                    </View>

                    <Text style={styles.footText}>Forget the password</Text>
                    <View style={styles.containerFoot}>
                        <Button
                            title='go back'
                            onPress={() => navigation.goBack()}
                            color={colors.black}
                        />
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login;
