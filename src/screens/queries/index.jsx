import { Alert, Button, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";

import { QueriesItem } from "../../components";
import { colors } from "../../constants";
import { insertQuery } from "../../db";
import { styles } from "./styles";

const Queries = ({ navigation }, name, query, number, image) => {

    const onHandledQuery = () => {
        const result = insertQuery( name, query, number, image); 
        //console.warn("result", result)  
        return Alert.alert("Query sent successfully", "We will contact you", [{ text: "Ok" }])
    };
    return (
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}>
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Send a Query</Text>
                    </View>
                    <QueriesItem />
                    <View style={styles.button}>
                        <Button
                            title='Send Query'
                            color={colors.primary}
                            onPress={onHandledQuery}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
    );
};

export default Queries;