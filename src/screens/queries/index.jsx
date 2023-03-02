import { QueriesItem } from "../../components";
import { View } from "react-native";
import { styles } from "./styles";

const Queries = ( {navigation}) => {
    return(
        <View style={styles.container}>
            <QueriesItem/>
        </View>
    );
};

export default Queries;