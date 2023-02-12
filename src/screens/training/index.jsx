import { Button, Text, View } from "react-native";

import { colors } from "../../constants";
import { styles } from "./styles";

const Training = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Training</Text>
            <View>
                <Button
                    title="Musculos"
                    onPress={() => navigation.navigate('Muscle')}
                    color={colors.primary} />
            </View>
        </View>
    );
};

export default Training;