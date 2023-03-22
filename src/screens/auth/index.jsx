import { Button, ImageBackground, Text, View } from "react-native";

import React from "react";
import { colors } from "../../constants";
import { styles } from "./styles";

const image = { uri: 'https://img.freepik.com/foto-gratis/hombre-cuerda-entrenamiento-funcional_136403-6825.jpg?size=626' };

const Auth = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                <View style={styles.buttonContainer}>
                    <Button
                        title="Login/Register"
                        onPress={() => navigation.navigate('Login')}
                        color={colors.primary} />
                </View>
            </ImageBackground>
        </View>
    )
};

export default Auth;