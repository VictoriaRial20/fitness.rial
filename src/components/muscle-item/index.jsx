import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles"

const MuscleItem = ({item, onSelected}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.contentContainer}
                onPress={() => onSelected(item)}
            >
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.muscleZone}>
                <Text style={styles.time}>{item.time}min</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

export default MuscleItem;