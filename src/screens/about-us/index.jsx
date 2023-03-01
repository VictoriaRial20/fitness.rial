import { Text, View } from "react-native";

import { ImageSelector } from "../../components";
import { styles } from "./styles";

const AboutUs = ( {navigation}) => {

    const onImage  = (uri) => {
        console.warn(uri);
    }
    return(
        <View style={styles.container}>
            <Text>AboutUs</Text>
            <ImageSelector
                onImage={onImage}
            />
        </View>
    );
};

export default AboutUs;