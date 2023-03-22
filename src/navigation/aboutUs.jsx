import {AboutUs} from '../screens/index'
import { colors } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AboutUsNavigation = () => {
    return(
        <Stack.Navigator 
        initialRouteName='Principal'
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
        }}>
            <Stack.Screen name ='AboutUs' component={AboutUs} options={ 
                {headerShown: false}
                }/>
        </Stack.Navigator>
    )
};

export default AboutUsNavigation;