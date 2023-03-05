import { Button, Text, View } from "react-native";

import { QueriesItem } from "../../components";
import { colors } from "../../constants";
import { styles } from "./styles";

const Queries = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Send a Query</Text>
            </View>
            <QueriesItem />
            <View style={styles.button}>
                <Button
                    title='Send Query'
                    color={colors.primary}
                    onPress={() => null}
                />
            </View>

        </View>
    );
};

export default Queries;