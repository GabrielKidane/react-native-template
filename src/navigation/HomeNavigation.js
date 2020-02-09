import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

export const HomeNavigation = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
);