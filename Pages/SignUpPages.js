import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleLogo from '../assets/gogglee.png';
import FacebookLogo from '../assets/fb.png';

const SignUpPages = ({ backgroundColor = '#006400', text = 'Sign up' }) => {
  const navigation = useNavigation();
  const [formSignUp, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [signUpStatus, setSignUpStatus] = useState('');

  const onSubmit = () => {
    if (formSignUp.name && formSignUp.email && formSignUp.password) {
      setSignUpStatus('Sign up Berhasil');
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Login');
      }, 2000);
    } else {
      setSignUpStatus('Please fill in all fields');
      setModalVisible(true);
    }
  };

  return (
    <View style={[styles.outerContainer, { backgroundColor }]}>
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={(name) => setForm({ ...formSignUp, name })}
            value={formSignUp.name}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(email) => setForm({ ...formSignUp, email })}
            value={formSignUp.email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            onChangeText={(password) => setForm({ ...formSignUp, password })}
            value={formSignUp.password}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or sign up with social account</Text>
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
              <Text style={styles.modalText}>{signUpStatus}</Text>
              <TouchableOpacity
                style={[styles.signUpButton, { backgroundColor: '#007BFF' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.signUpButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
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
    color: '#777',
  },
  footerLink: {
    fontSize: 14,
    color: 'red',
  },
  signUpButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },
  signUpButtonText: {
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
});

export default SignUpPages;
