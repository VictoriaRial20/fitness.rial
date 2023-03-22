import AboutUsNavigation from './aboutUs';
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
                title:'Contact',
                tabBarIcon: ({focused}) => (
                    <IonicIcons name={focused ? 'md-people' : 'md-people-outline'}
                        size={24}
                        color={colors.primary}/>
                ),
            }} component={AboutUsNavigation}/>
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
                    <IonicIcons name={focused ? 'call' : 'call-outline'}
                        size={24}
                        color={colors.primary}/>
                ),
                
            }} component={QueriesNavigation}/>
            
        </BottomTab.Navigator>
    )
};

export default Tabs;