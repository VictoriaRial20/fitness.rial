import AboutUsNavigation from './about-us';
import IonicIcons from '@expo/vector-icons/Ionicons';
import StartNavigation from './start';
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
            <BottomTab.Screen name="StartTap" options={{
                title:'Get in',
                tabBarIcon: ({focused}) => (
                    <IonicIcons name={focused ? 'log-in' : 'log-in-outline'}
                        size={24}
                        color={colors.secondary}/>
                ),
            }} component={StartNavigation}/>
            <BottomTab.Screen name="TrainingTap" options={{
                title:'Training',
                tabBarIcon: ({focused}) => (
                    <IonicIcons name={focused ? 'barbell' : 'barbell-outline'}
                        size={24}
                        color={colors.secondary}/>
                ),
            }} component={TrainingNavigation}/>
            <BottomTab.Screen name="AboutUsTap" options={{
                title:'About Us',
                tabBarIcon: ({focused}) => (
                    <IonicIcons name={focused ? 'md-people' : 'md-people-outline'}
                        size={24}
                        color={colors.secondary}/>
                ),
                
            }} component={AboutUsNavigation}/>
            
        </BottomTab.Navigator>
    )
};

export default Tabs;