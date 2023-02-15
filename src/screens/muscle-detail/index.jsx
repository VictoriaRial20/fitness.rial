import { Text, View } from "react-native";

import { MUSCLE } from "../../constants/data";
import { styles } from "./styles";

const MuscleDetail = ( {navigation , route}) => {
    const {muscleId , title} = route.params;
    const muscle = MUSCLE.find((muscle) => muscle.id === muscleId) ;

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