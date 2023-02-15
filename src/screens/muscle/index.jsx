import { FlatList, SafeAreaView, } from "react-native";
import React ,{useEffect} from "react";
import {filterMuscle, selectMuscle} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

import { MuscleItem } from "../../components/index";
import { styles } from "./styles";

const Muscle = ( {navigation}) => {
    const dispatch = useDispatch();
    const zone = useSelector((state) => state.zone.selected);
    const filteredMuscle = useSelector((state) => state.muscle.filteredMuscle);
    
    //console.log(zone);
    //console.log(filteredMuscle);

    const renderItem = ({ item }) => <MuscleItem item={item} onSelected={onSelected} />;
    const onSelected = (item) => {
        dispatch(selectMuscle(item.id));
        navigation.navigate ('MuscleDetail', {
            //muscleId: item.id,
            title: item.title,
        });
    };

    const keyExtractor = (item) => item.id.toString();
    
    useEffect(() =>{
        dispatch(filterMuscle(zone.id));
    }, []);
    
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