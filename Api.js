import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpPages from './Pages/SignUpPages';
import LoginPages from './Pages/LoginPages';
import Home from './Pages/Home'; // Import the Home component
import Shop from './Pages/Shop';
import Bag from './Pages/Bag';
import Favorit from './Pages/Favorit';
import Profil from './Pages/Profil';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/Home-aktif.jpg') : require('./assets/Home-tidak-aktif.jpg')}
              style={{ width: 35, height: 35 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/Shop-aktif.jpg') : require('./assets/Shop-non-aktif.jpg')}
              style={{ width: 35, height: 35 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/Bag-aktif.png') : require('./assets/Bag-tidak-aktif.png')}
              style={{ width: 35, height: 35 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={Favorit}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/Favorit-aktif.jpg') : require('./assets/Favorit-tidak-aktif.jpg')}
              style={{ width: 35, height: 35 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/Profil-aktif.jpg') : require('./assets/Profil-tidak-aktif.jpg')}
              style={{ width: 35, height: 35 }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp" // Set SignUp as the initial route
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUp" component={SignUpPages} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
