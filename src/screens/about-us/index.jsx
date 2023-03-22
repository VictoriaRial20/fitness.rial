import { Image, Text, View } from "react-native";

import { styles } from "./styles";

const AboutUs = ( {navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image 
                source={require('../../utils/img/foto1.png')}
                style={{width: 380}}
             />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>Marcos Ribera</Text>
                <Text style={styles.number}>Mobile: +598 99 987 123</Text>
                <Text style={styles.email}>Email: marcoribera@gmail.com</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>Florencia Costa</Text>
                <Text style={styles.number}>Mobile: +598 99 134 028</Text>
                <Text style={styles.email}>Email: florenciacosta@gmail.com</Text>
            </View>
        </View>
    );
};

export default AboutUs;