import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/LoginPage';
import ForgotPassword from './Pages/ForgotPage';
import Signup from './Pages/SingUpPage';
import { Button } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Login"
        onPress= {() => navigation.navigate ('SingUpPage')}
        />
    </View>
    
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="ForgotPage" component={ForgotPassword} />
        <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="SingUpPage" component= {Signup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;