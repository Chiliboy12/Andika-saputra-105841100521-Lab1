import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleLogo from '../assets/gogglee.png';
import FacebookLogo from '../assets/fb.png';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get("window");

const LoginPages = ({ backgroundColor = '#006400', text = 'Log in' }) => {
  const navigation = useNavigation();
  const [formLogin, setForm] = useState({
    email: '',
    password: ''
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');

  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
  });

  const onSubmit = () => {
    const { email, password } = formLogin;
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'All fields are required!',
      });
      return;
    }

    axios.post('https://api.beasiswa.unismuh.ac.id/api/login', {
      username: email,
      password: password
    })
    .then(async (response) => {
      if (response.status === 200) {
        await AsyncStorage.setItem("userName", response.data.data.nama);
        await AsyncStorage.setItem("userNim", email);

        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Login Successful',
          autoHide: false,
        });

        setTimeout(() => {
          Toast.hide();
          navigation.navigate("Home");
        }, 3000);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Invalid Email or Password!',
        });
      }
    })
    .catch(error => {
      console.log("Error during login:", error.message);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to log in. Please try again later.',
      });
    });
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={[styles.outerContainer, { backgroundColor }]}>
      <View style={styles.container}>
        <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>{text}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(hasil) => setForm({ ...formLogin, email: hasil })}
            value={formLogin.email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setForm({ ...formLogin, password: text })}
            value={formLogin.password}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPages')}>
            <Text style={[styles.footerText, { fontFamily: 'Metropolis-Medium' }]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or log in with social account</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={[styles.socialButton, { marginRight: 10 }]}>
            <Image source={GoogleLogo} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={FacebookLogo} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{loginStatus}</Text>
              <TouchableOpacity
                style={[styles.loginButton, { backgroundColor: 'green' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.loginButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: 150,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
});

export default LoginPages;
