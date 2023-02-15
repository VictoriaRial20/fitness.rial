import { FlatList, SafeAreaView, } from "react-native";

import { MUSCLE } from "../../constants/data/index";
import { MuscleItem } from "../../components/index";
import { styles } from "./styles";

const Muscle = ( {navigation, route}) => {
    const { zoneId, title} = route.params;

    const filteredMuscle = MUSCLE.filter((muscle) => muscle.categoryId === zoneId);
    //console.warn(filteredMuscle);
    const renderItem = ({ item }) => <MuscleItem item={item} onSelected={onSelected} />;
    const onSelected = (item) => {
        navigation.navigate ('MuscleDetail', {
            muscleId: item.id,
            title:item.title,
        });
    };

    const keyExtractor = (item) => item.id.toString();
    //console.warn(title, zoneId)
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredMuscle}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.containerList}
            />
        </SafeAreaView>
    );
};

export default Muscle;