import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Alert, Button, Image, Text, View } from 'react-native';

import { colors } from '../../constants';
import {styles} from './styles';
import { useState } from 'react';

const ImageSelector = ({ onImage }) => {
    const[pickerUrl, setPickerUrl] = useState(null)

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted"){
            Alert.alert("Insufficient permissions", "You need to give permissions to use the camera", [{text: "Ok"}]);
            return false;
        }
        return true; 
    };

    const onHandleTakeImage = async () => {
        const isCameraPermission = await verifyPermissions();
        if(!isCameraPermission) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.7,
        });

        setPickerUrl(image.uri);
        onImage(image.uri);
    };

    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickerUrl ? (
                    <Text style={styles.textPreview}> no image selected</Text>
                ): (
                    <Image style={styles.image} source={{uri: pickerUrl}}/>
                )}
            </View>
            <Button
                title='Take photo'
                color={colors.primary}
                onPress={onHandleTakeImage}
            />

        </View>
    )
}

export default ImageSelector;