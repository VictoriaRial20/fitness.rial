import { Button, ImageBackground, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const image = { uri: 'https://img.freepik.com/foto-gratis/hombre-cuerda-entrenamiento-funcional_136403-6825.jpg?size=626' };

const Principal = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                <Text style={styles.title}>*LOGO*</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Sign Up"
                        onPress={() => { }}
                        color='#A1C6EA' />

                    <Button
                        title="Login"
                        onPress={() => navigation.navigate('Login')}
                        color='#B6C7CB' />
                </View>
            </ImageBackground>
        </View>
    )
};

export default Principal;