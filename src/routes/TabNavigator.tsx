import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Home from "../screens/tabs/Home";
import Profile from "../screens/tabs/Profile";
import About from "../screens/tabs/About";
import Settings from "../screens/tabs/Settings";
import CustomBottomTab from "../components/bottomTabs/CustomBottomTab";

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
        <Tab.Group
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                options={{tabBarLabel: 'Acceuil'}}
                name="Home" 
                component={Home} 
            />
            <Tab.Screen
                options={{tabBarLabel: 'Profil'}}
                name="Profile"  
                component={Profile} 
            />
            <Tab.Screen
                options={{tabBarLabel: 'Options'}}
                name="Settings"  
                component={Settings}  
            />
            <Tab.Screen
                options={{tabBarLabel: 'a propos'}}
                name="About"  
                component={About} 
            />
        </Tab.Group>
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
 

});

export default TabNavigator;