import {Queries} from '../screens';
import {colors} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const QueriesNavigation = () => {
    return(
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={{
                headerStyle:{
                    backgroundColor:colors.white,
                },
                headerTintColor:colors.primary,
                navigationBarColor:colors.white,
                }}
        >
            <Stack.Screen
                name="Queries"
                component={Queries}
                options={
                    { headerShown: false }
                }
            />
        </Stack.Navigator>
    )
}

export default QueriesNavigation;