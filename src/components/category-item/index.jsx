import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles"

const CategoryItem = ({item, onSelected}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.contentContainer, backgroundColor: item.color}}
                onPress={() => onSelected(item)}
            >
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryItem;