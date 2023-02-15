import { Text, View } from "react-native";

import { styles } from "./styles";
import { useSelector } from 'react-redux';

const MuscleDetail = ( {navigation }) => {
    //const {muscleId , title} = route.params;
    const muscle = useSelector((state) => state.muscle.selected);
    //const muscle = MUSCLE.find((muscle) => muscle.id === muscleId) ;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{muscle.title}</Text>
            <Text style={styles.exercise}>{muscle.exercise}</Text>
            <Text style={styles.weight}>{muscle.weight}</Text>
            <Text style={styles.reps}>{muscle.reps} Reps</Text>
            <Text style={styles.time}>{muscle.time} mins total</Text>
        </View>
    );
};

export default MuscleDetail;