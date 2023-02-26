import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles"

const ZoneItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={item.uri} resizeMode="cover" style={styles.image}>
                <TouchableOpacity style={{ ...styles.contentContainer }}
                    onPress={() => onSelected(item)}
                >
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

export default ZoneItem;