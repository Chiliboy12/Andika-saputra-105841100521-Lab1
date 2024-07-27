import * as React from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import SignUpPages from './Pages/SignUpPages';
import LoginPages from './Pages/LoginPages';
import Home from './Pages/Home';
import Bag from './Pages/Bag';
import Favorit from './Pages/Favorit';
import Profil from './Pages/Profil';
import ForgotPages from './Pages/ForgotPages';
const saleItems = [
  {
    url: require('./assets/BahanBaku/sapi.jpg'),
    caption: 'Sapi',
    price: '160.000',
    oldPrice: '200.000',
    discount: '-40%',
    rating: 5,
    reviews: 1523
  },
  {
    url: require('./assets/BahanBaku/ayam.jpg'),
    caption: 'Ayam',
    price: '60.000',
    oldPrice: '80.000',
    discount: '-20%',
    rating: 5,
    reviews: 893
  },
  {
    url: require('./assets/BahanBaku/kambing.jpg'),
    caption: 'Kambing',
    price: '130.000',
    oldPrice: '150.000',
    discount: '-20%',
    rating: 5,
    reviews: 1032
  },
  {
    url: require('./assets/BahanBaku/kerbau.jpg'),
    caption: 'Kerbau',
    price: '180.000',
    oldPrice: '200.000',
    discount: '-20%',
    rating: 5,
    reviews: 1100
  },{
    url: require('./assets/BahanBaku/bebek.jpg'),
    caption: 'Bebek',
    price: '100.000',
    oldPrice: '120.000',
    discount: '-10%',
    rating: 5,
    reviews: 1221
  },
];

const newItems = [
  {
    url: require('./assets/BahanBaku/Sawi.jpg'),
    caption: 'Sawi',
    price: '15.000',
    rating: 5,
    reviews: 221
  },
  {
    url: require('./assets/BahanBaku/kangkung.jpeg'),
    caption: 'Kangkung',
    price: '10.000',
    rating: 5,
    reviews: 2031
  },
  {
    url: require('./assets/BahanBaku/bayam.jpg'),
    caption: 'Bayam',
    price: '12.000',
    rating: 5,
    reviews: 1964
  },
  {
    url: require('./assets/BahanBaku/brocoli.jpg'),
    caption: 'Brocoli',
    price: '25.000',
    rating: 5,
    reviews: 611
  }
];

const rempahItems = [
  {
    url: require('./assets/BahanBaku/jahe.jpg'),
    caption: 'Jahe',
    price: '30.000',
    oldPrice: '40.000',
    discount: '-25%',
    rating: 5,
    reviews: 523
  },
  {
    url: require('./assets/BahanBaku/Kunyit.jpg'),
    caption: 'Kunyit',
    price: '25.000',
    oldPrice: '35.000',
    discount: '-20%',
    rating: 5,
    reviews: 345
  },
  {
    url: require('./assets/BahanBaku/Lengkuas.jpg'),
    caption: 'Lengkuas',
    price: '28.000',
    oldPrice: '38.000',
    discount: '-15%',
    rating: 5,
    reviews: 467
  },
  {
    url: require('./assets/BahanBaku/kemiri.jpg'),
    caption: 'Kemiri',
    price: '45.000',
    oldPrice: '50.000',
    discount: '-10%',
    rating: 5,
    reviews: 621
  },
];
  const oceanMeatItems = [
    {
      url: require('./assets/BahanBaku/ikan.jpg'),
      caption: 'Ikan',
      price: '50.000',
      oldPrice: '60.000',
      discount: '-10%',
      rating: 5,
      reviews: 345
    },
    {
      url: require('./assets/BahanBaku/udang.jpg'),
      caption: 'Udang',
      price: '70.000',
      oldPrice: '80.000',
      discount: '-12%',
      rating: 5,
      reviews: 512
    },
    {
      url: require('./assets/BahanBaku/cumi.jpg'),
      caption: 'Cumi',
      price: '90.000',
      oldPrice: '100.000',
      discount: '-10%',
      rating: 5,
      reviews: 423
    },
    {
      url: require('./assets/BahanBaku/kepiting.jpg'),
      caption: 'Kepiting',
      price: '120.000',
      oldPrice: '150.000',
      discount: '-20%',
      rating: 5,
      reviews: 631
    }
  ];
  const groupItems = (items, groupSize) => {
    let groupedItems = [];
    for (let i = 0; i < items.length; i += groupSize) {
      groupedItems.push(items.slice(i, i + groupSize));
    }
    return groupedItems;
  };

  const Shop = () => {
    const groupedSaleItems = groupItems(saleItems, 2);
    const groupedNewItems = groupItems(newItems, 2);
    const groupedRempahItems = groupItems(rempahItems, 2);
    const groupedOceanmeatItems = groupItems(oceanMeatItems, 2);
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./assets/BahanBaku/bahan.png')}
            style={styles.headerImage}
          />
        </View>
  
        <View style={styles.saleSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Halal Meat</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <Slide easing="ease">
            {groupedSaleItems.map((group, index) => (
              <View key={index} style={styles.slide}>
                {group.map((item, subIndex) => (
                  <View key={subIndex} style={styles.item}>
                    {item.discount && (
                      <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{item.discount}</Text>
                      </View>
                    )}
                    <Image source={item.url} style={styles.itemImage} />
                    <View style={styles.productDetails}>
                      <Text style={styles.productName}>{item.caption}</Text>
                      <View style={styles.priceContainer}>
                        {item.oldPrice && (
                          <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                        )}
                        <Text style={styles.newPrice}>{item.price}</Text>
                      </View>
                      <View style={styles.ratingContainer}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Text key={i} style={styles.star}>
                            {i < item.rating ? '★' : '☆'}
                          </Text>
                        ))}
                        <Text style={styles.reviews}>({item.reviews})</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </Slide>
        </View>
  
        <View style={styles.newSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Ocean Meat</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <Slide easing="ease">
            {groupedOceanmeatItems.map((group, index) => (
              <View key={index} style={styles.slide}>
                {group.map((item, subIndex) => (
                  <View key={subIndex} style={styles.item}>
                    <Image source={item.url} style={styles.itemImage} />
                    <View style={styles.productDetails}>
                      <Text style={styles.productName}>{item.caption}</Text>
                      <View style={styles.priceContainer}>
                        {item.oldPrice && (
                          <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                        )}
                        <Text style={styles.newPrice}>{item.price}</Text>
                      </View>
                      <View style={styles.ratingContainer}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Text key={i} style={styles.star}>
                            {i < item.rating ? '★' : '☆'}
                          </Text>
                        ))}
                        <Text style={styles.reviews}>({item.reviews})</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </Slide>
        </View>
  
        <View style={styles.newSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Sayuran segar</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <Slide easing="ease">
            {groupedNewItems.map((group, index) => (
              <View key={index} style={styles.slide}>
                {group.map((item, subIndex) => (
                  <View key={subIndex} style={styles.item}>
                    <Image source={item.url} style={styles.itemImage} />
                    <View style={styles.productDetails}>
                      <Text style={styles.productName}>{item.caption}</Text>
                      <Text style={styles.newPrice}>{item.price}</Text>
                      <View style={styles.ratingContainer}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Text key={i} style={styles.star}>
                            {i < item.rating ? '★' : '☆'}
                          </Text>
                        ))}
                        <Text style={styles.reviews}>({item.reviews})</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </Slide>
        </View>
  
        <View style={styles.newSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Rempah Nusantara</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <Slide easing="ease">
            {groupedRempahItems.map((group, index) => (
              <View key={index} style={styles.slide}>
                {group.map((item, subIndex) => (
                  <View key={subIndex} style={styles.item}>
                    {item.discount && (
                      <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{item.discount}</Text>
                      </View>
                    )}
                    <Image source={item.url} style={styles.itemImage} />
                    <View style={styles.productDetails}>
                      <Text style={styles.productName}>{item.caption}</Text>
                      <View style={styles.priceContainer}>
                        {item.oldPrice && (
                          <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                        )}
                        <Text style={styles.newPrice}>{item.price}</Text>
                      </View>
                      <View style={styles.ratingContainer}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Text key={i} style={styles.star}>
                            {i < item.rating ? '★' : '☆'}
                          </Text>
                        ))}
                        <Text style={styles.reviews}>({item.reviews})</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </Slide>
        </View>
      </ScrollView>
    );
  };
  

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
        initialRouteName="SignUp"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUp" component={SignUpPages} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPages} />
        <Stack.Screen name="ForgotPages" component={ForgotPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 150,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  saleSection: {
    padding: 20,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 16,
    color: 'blue',
  },
  slide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productDetails: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  newPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  star: {
    color: 'gold',
  },
  reviews: {
    marginLeft: 5,
    color: '#666',
  },
  newSection: {
    padding: 20,
  },
});

export default Shop;
