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
                headerTitleStyle:{
                    fontFamily:'AbhayaLibre-SemiBold',
                    fontSize:18,
                }
            }}
        >
            <Stack.Screen
                name="Training"
                component={Training}
                options={
                    { headerShown: false }
                }
            />
            <Stack.Screen
                name="Muscle"
                component={Muscle}
                options={({route}) => ({
                    title: route.params.title,
                })}

            />
            <Stack.Screen
                name="MuscleDetail"
                component={MuscleDetail}
                options={({route}) => ({
                    title: route.params.title,
                })}
            />

        </Stack.Navigator>
    )
}

export default TrainingNavigation;