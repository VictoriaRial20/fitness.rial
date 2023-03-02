import { QueriesItem } from "../../components";
import { View } from "react-native";
import { styles } from "./styles";

const Queries = ( {navigation}) => {

    const onImage  = (uri) => {
        console.warn(uri);
    }
    return(
        <View style={styles.container}>
            <QueriesItem
            />
        </View>
    );
};

export default Queries;