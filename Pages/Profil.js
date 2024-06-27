// ProfilScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import profileImage from '../assets/Foto.jpg'; 

const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={profileImage}
        />
        <Text style={styles.profileName}>Andika Saputra</Text>
        <Text style={styles.profileEmail}>105841100521@student.unismuh.ac.id</Text>
      </View>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Pesanan saya </Text>
        <Text style={styles.itemSubText}>Jumlah Pesanan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Alamat penerima</Text>
        <Text style={styles.itemSubText}>Jl.Poros panciro takalar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Metode pembayaran</Text>
        <Text style={styles.itemSubText}>Norek **34***77</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>promocodes</Text>
        <Text style={styles.itemSubText}>Anda tidak memiliki code promocodes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Review saya</Text>
        <Text style={styles.itemSubText}>Review  4 barang</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Pengaturan</Text>
        <Text style={styles.itemSubText}>Pengaturan password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#888',
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 18,
  },
  itemSubText: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProfilScreen;
