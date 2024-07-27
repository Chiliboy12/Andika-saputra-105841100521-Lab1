import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPages = ({ backgroundColor = '#006400', text = 'Forgot password' }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const onSendPress = () => {
    if (email) {
      setSendStatus('Email has been sent successfully.');
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.goBack();
      }, 2000);
    } else {
      setSendStatus('Please enter a valid email address.');
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.container, { backgroundColor }]}>
        <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'<'} </Text>
        </TouchableOpacity>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.instruction}>
          Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
          <Text style={styles.sendButtonText}>SEND</Text>
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
            <Text style={styles.modalText}>{sendStatus}</Text>
            <TouchableOpacity
              style={[styles.sendButton, { backgroundColor: 'green', marginTop: 20 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.sendButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#006400',
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
  backIconContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backIcon: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Metropolis-Bold',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontFamily: 'Metropolis-Bold',
    color: 'white',
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    fontFamily: 'Metropolis-Bold',
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
    fontFamily: 'Metropolis-Bold',
  },
  textInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    fontSize: 16,
    fontFamily: 'Metropolis-Bold',
  },
  sendButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    borderWidth: 1,
    borderColor: 'green',
  },
  sendButtonText: {
    color: 'green',
    fontSize: 16,
    fontFamily: 'Metropolis-Bold',
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
    textAlign: 'center',
  },
});

export default ForgotPages;
