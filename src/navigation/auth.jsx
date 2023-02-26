import {Auth, Login} from '../screens';

import { colors } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
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
            <Stack.Screen name ='Authentication' component={Auth} options={ 
                {headerShown: false}
                }/>
            <Stack.Screen name ='Login' component={Login}/>
        </Stack.Navigator>
    )
};

export default AuthNavigation;