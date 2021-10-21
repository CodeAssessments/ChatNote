// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import NoteScreen from "../screens/NoteScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ChatNote' }}/>
        <Stack.Screen name="Note" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;