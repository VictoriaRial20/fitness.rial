import AuthNavigation from './auth';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './tabs';
import {useSelector} from 'react-redux';

const AppNavigation = () => {
    const userId = useSelector((state) => state.auth.userId);
    return(
        <NavigationContainer>
            {userId ? <TabsNavigator/> : <AuthNavigation/>} 
        </NavigationContainer>
    );
};

export default AppNavigation;