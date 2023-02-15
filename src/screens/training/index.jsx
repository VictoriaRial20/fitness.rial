import { FlatList, SafeAreaView, } from "react-native";
import {useDispatch, useSelector} from 'react-redux';

import { ZoneItem } from "../../components/index";
import { selectZone } from "../../store/actions/index";
import { styles } from "./styles";

const Training = ({ navigation }) => {
    const dispatch = useDispatch();
    const zone = useSelector((state) => state.zone.zone);
    const onSelected = (item) => {
        dispatch(selectZone(item.id))
        navigation.navigate('Muscle', { 
            title: item.title,
        })
    };
    const renderItem =({ item }) => <ZoneItem item={item} onSelected={onSelected}/>;
    const keyExtractor = (item) => item.id.toString();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={zone}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.containerList}
            />
        </SafeAreaView>
    );
};

export default Training;