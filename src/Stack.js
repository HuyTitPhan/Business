import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MyTabBar from './BottomTabs';
import Register from './Register';
import LoginFaceBook from './LoginFaceBook';
import Connect from './Connect';
import HelpScreen from './help';
import Start from './Start';
import Post1 from './Post1';
import List from './List';
import News from './News';
import ChangPostid from './ChangPostid';
import Calendars from './Calendars';
import Charts from './Charts';
import Campaign from './Campaign';
import Price from './Price';
import Home from './Home';
import Search from './Search';
import CampaignList from './CampaignList';
import Notifications from './Notifications';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />} 
            screenOptions={{headerShown: false}} >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Campaign" component={Campaign} />
            <Tab.Screen name="Price" component={Price} />
            {/* <Tab.Screen name="Tracking" component={Tracking} /> */}
            {/* <Tab.Screen name="Change" component={Change} /> */}
            {/* <Tab.Screen name="Support" component={Support} /> */}
            {/* <Tab.Screen name="Settings" component={Settings} /> */}
            {/* <Tab.Screen name="Calendars" component={Calendars} /> */}
            {/* <Tab.Screen name="Charts" component={Charts} /> */}
    
    
         
        </Tab.Navigator>
    );
}
function mainStack() {
    return (
        <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
           <Stack.Screen name="Start" component={Start} />
            {/* <Stack.Screen name="Login" component={Login} /> */}
            {/* <Stack.Screen name="Ilogin" component={Ilogin} /> */}
            <Stack.Screen name="HomeScreen" component={MyTabs} />
            <Stack.Screen name="LoginFaceBook" component={LoginFaceBook} />
            <Stack.Screen name="Post1" component={Post1} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Connect" component={Connect} />
            <Tab.Screen name="HelpScreen" component={HelpScreen} />
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="ChangPostid" component={ChangPostid} />
            <Stack.Screen name="CampaignList" component={CampaignList} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="Charts" component={Charts} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Calendars" component={Calendars} />
        </Stack.Navigator>
    );
}

export default mainStack;