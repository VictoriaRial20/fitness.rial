import { ImageSelector } from "../../components";
import { View } from "react-native";
import { styles } from "./styles";

const Queries = ( {navigation}) => {

    const onImage  = (uri) => {
        console.warn(uri);
    }
    return(
        <View style={styles.container}>
            <ImageSelector
                onImage={onImage}
            />
        </View>
    );
};

export default Queries;