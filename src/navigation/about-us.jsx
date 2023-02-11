import {AboutUs} from '../screens';
import {colors} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AboutUsNavigation = () => {
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
                name="AboutUs"
                component={AboutUs}
            />
        </Stack.Navigator>
    )
}

export default AboutUsNavigation;