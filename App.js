import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPages from './Pages/SignUpPages';
import LoginPages from './Pages/LoginPages';
import ForgotPages from './Pages/ForgotPages';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen 
          name="SignUp" 
          component={SignUpPages} 
          options={{ title: 'Sign Up', headerShown: false }} // Hide the header for a cleaner look
        />
        <Stack.Screen 
          name="Login" 
          component={LoginPages} 
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPages} 
          options={{ title: 'Forgot Password', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

