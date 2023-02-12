import { Button, Text, View } from "react-native";

import { colors } from "../../constants";
import { styles } from "./styles";

const Muscle = ( {navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Muscle</Text>
            <Button
                    title="detalle musculos"
                    onPress={() => navigation.navigate('MuscleDetail')}
                    color={colors.primary} />
        </View>
    );
};

export default Muscle;