import { FlatList, SafeAreaView, } from "react-native";

import { ZONE } from "../../constants/data/index";
import { ZoneItem } from "../../components/index";
import { styles } from "./styles";

const Training = ({ navigation }) => {
    const onSelected = (item) => {
        navigation.navigate('Muscle', { 
            zoneId: item.id,
            title: item.title,
        })
    };
    const renderItem =({ item }) => <ZoneItem item={item} onSelected={onSelected}/>;
    const keyExtractor = (item) => item.id.toString();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ZONE}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.containerList}
            />
        </SafeAreaView>
    );
};

export default Training;