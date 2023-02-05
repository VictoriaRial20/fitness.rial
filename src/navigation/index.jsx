import { NavigationContainer } from '@react-navigation/native';
import  StartNavigation  from './start';

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <StartNavigation/>
        </NavigationContainer>
    );
};

export default AppNavigation;