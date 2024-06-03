import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPassword = ({ backgroundColor = '#f7f7f7', text = 'Forgot password' }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <TouchableOpacity style={styles.backIconContainer}>
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
                />
                <Text style={styles.errorMessage}>Not a valid email address. Should be your@email.com</Text>
            </View>
            <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendButtonText}>SEND</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    backIconContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    backIcon: {
        fontSize: 24,
        color: 'black',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    instruction: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
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
        color: 'red',
        marginBottom: 5,
    },
    textInput: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 4,
        fontSize: 16,
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
    },
    sendButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ForgotPassword;