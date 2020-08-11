import { enableScreens } from 'react-native-screens';
{ Platform.OS == 'ios' ? enableScreens() : null };
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, DrawerItem
} from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screens/Home'




const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => alert('Logout')}
            />

        </DrawerContentScrollView>
    );
}


const DrawerStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
}


export const AppContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                headerMode='none'
                mode='card'
            >
                <Stack.Screen name="Home" component={DrawerStack} headerShown={false} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

