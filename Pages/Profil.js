import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("window");

const ProfilePage = () => {
  const [userName, setUserName] = useState('');
  const [nim, setNim] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const storedUserName = await AsyncStorage.getItem("userName");
      const storedNim = await AsyncStorage.getItem("userNim");

      if (storedUserName !== null) {
        setUserName(storedUserName);
      }

      if (storedNim !== null) {
        setNim(storedNim);
      }
    } catch (error) {
      console.log("Error retrieving user data:", error.message);
    }
  };

  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: `https://simakad.unismuh.ac.id/upload/mahasiswa/${nim}.jpg` }}
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>{userName}</Text>
            <Text style={styles.profileEmail}>{nim}</Text>
          </View>
        </View>
        <View style={styles.profileDetails}>
          <ProfileItem title="My orders" subtitle="Already have 12 orders" />
          <ProfileItem title="Shipping addresses" subtitle="3 addresses" />
          <ProfileItem title="Payment methods" subtitle="Visa **34" />
          <ProfileItem title="Promocodes" subtitle="You have special promocodes" />
          <ProfileItem title="My reviews" subtitle="Reviews for 4 items" />
          <ProfileItem title="Settings" subtitle="Notifications, password" />
        </View>
      </ScrollView>
    </View>
  );
};

const ProfileItem = ({ title, subtitle }) => (
  <TouchableOpacity style={styles.profileItem}>
    <View style={styles.itemTextContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemSubtitle}>{subtitle}</Text>
    </View>
    <Text style={styles.itemIcon}>›</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    fontFamily: 'Metropolis-Bold',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    fontFamily: 'Metropolis-Bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  profileDetails: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  itemIcon: {
    fontSize: 20,
    color: '#999',
  },
});

export default ProfilePage;
