import {Login, Principal} from '../screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StartNavigation = () => {
    return(
        <Stack.Navigator initialRouteName='Principal'>
            <Stack.Screen name ='Principal' component={Principal} options={ {headerShown: false}}/>
            <Stack.Screen name ='Login' component={Login} options={ {headerShown: false}}/>
        </Stack.Navigator>
    )
};

export default StartNavigation;