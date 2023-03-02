import { Button, Text, View } from 'react-native';

import ImageSelector from '../image-selector/index';
import { colors } from '../../constants';
import { styles } from './styles';

const QueriesItem = () => {
    const onImage = (uri) => {
        console.warn(uri);
    }
    return (
        <View style={styles.container}>
            <Text>QUERIES.</Text>
            <ImageSelector
                onImage={onImage}
            />
            <Button
                title='Send'
                color={colors.primary}
                onPress={()=>null}
            />
        </View>
    )
}

export default QueriesItem;
