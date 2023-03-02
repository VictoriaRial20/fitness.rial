import AuthNavigation from './auth'
import IonicIcons from '@expo/vector-icons/Ionicons';
import QueriesNavigation from './queries';
import TrainingNavigation from './training'
import {colors} from '../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    
    return(
        <BottomTab.Navigator
        initialRouteName='ShopTab'
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle:{
                fontFamily:'AbhayaLibre-Regular',
                fontSize:14,
            },
            tabBarActiveTintColor:colors.black,
            tabBarInactiveTintColor:colors.grey,
        }}
        >
            <BottomTab.Screen name="AuthTap" options={{
                title:'Get in',
                tabBarIcon: ({focused}) => (
                    <IonicIcons name={focused ? 'log-in' : 'log-in-outline'}
                        size={24}
                        color={colors.primary}/>
                ),
            }} component={AuthNavigation}/>
            <BottomTab.Screen name="TrainingTap" options={{
                title:'Training',
                tabBarIcon: ({focused}) => (
                    <IonicIcons name={focused ? 'barbell' : 'barbell-outline'}
                        size={24}
                        color={colors.primary}/>
                ),
            }} component={TrainingNavigation}/>
            <BottomTab.Screen name="QueriesTap" options={{
                title:'Queries',
                tabBarIcon: ({focused}) => (
                    <IonicIcons name={focused ? 'md-people' : 'md-people-outline'}
                        size={24}
                        color={colors.primary}/>
                ),
                
            }} component={QueriesNavigation}/>
            
        </BottomTab.Navigator>
    )
};

export default Tabs;