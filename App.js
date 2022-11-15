import React from 'react';
import{NagivationContainer} from '@react-navigation/native';
import{CreateStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import Main from "./screens/Main";

const Stack=CreateStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home"component={Home}/>
        <Stack.Screen name="Main"component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

