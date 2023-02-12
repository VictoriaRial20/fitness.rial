import { Muscle, MuscleDetail, Training } from '../screens';

import { colors } from '../constants/themes/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TrainingNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.white,
                },
                headerTintColor: colors.primary,
                navigationBarColor: colors.white,
            }}
        >
            <Stack.Screen
                name="Training"
                component={Training}
            />
            <Stack.Screen
                name="Muscle"
                component={Muscle}
            />
            <Stack.Screen
                name="MuscleDetail"
                component={MuscleDetail}
            />

        </Stack.Navigator>
    )
}

export default TrainingNavigation;