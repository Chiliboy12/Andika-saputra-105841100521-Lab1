// App.js
import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpPages from './Pages/SignUpPages';
import LoginPages from './Pages/LoginPages';
import ForgotPages from './Pages/ForgotPages';
import HomeAktif from './assets/Home-aktif.jpg';
import HomeTidakAktif from './assets/Home-tidak-aktif.jpg';
import ShopAktif from './assets/Shop-aktif.jpg';
import ShopTidakAktif from './assets/Shop-non-aktif.jpg';
import Shop from './Pages/Shop';
import Bag from './Pages/Bag';
import BagAktif from './assets/Bag-aktif.png';
import BagtidakAktif from './assets/Bag-tidak-aktif.png';
import FavoritAktif from './assets/Favorit-aktif.jpg';
import FavorittidakAktif from './assets/Favorit-tidak-aktif.jpg';
import Favorit from './Pages/Favorit';
import Profil from './Pages/Profil';
import ProfilAktif from './assets/Profil-aktif.jpg';
import ProfiltidakAktif from './assets/Profil-tidak-aktif.jpg';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeTidakAktif}
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
              source={focused ? ShopAktif : ShopTidakAktif}
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
              source={focused ? BagAktif : BagtidakAktif}
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
              source={focused ? FavoritAktif: FavorittidakAktif}
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
              source={focused ? ProfilAktif : ProfiltidakAktif}
              style={{ width: 35, height: 35 }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="SignUp" component={SignUpPages} />
        <Stack.Screen name="Login" component={LoginPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
