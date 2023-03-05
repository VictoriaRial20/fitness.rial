import { Button, Text, TextInput, View } from 'react-native';

import ImageSelector from '../image-selector/index';
import { colors } from '../../constants';
import { styles } from './styles';

const QueriesItem = () => {
    const onImage = (uri) => {
        //console.warn(uri);
    }
    return (
        <View style={styles.container}>
            
            <View style={styles.containerInput}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    keyboardType="default"
                    maxLength={20}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Query:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your query"
                    keyboardType="default"
                    maxLength={200}
                    multiline={true}
                />
            </View>
            
            <View style={styles.containerInput}>
                <Text style={styles.label}>Number:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your number"
                    keyboardType="numeric"
                    maxLength={9}
                />
            </View>
            <ImageSelector
                onImage={onImage}
            />
            
        </View>
    )
}

export default QueriesItem;
