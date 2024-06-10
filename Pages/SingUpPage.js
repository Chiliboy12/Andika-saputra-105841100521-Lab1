import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import GoogleLogo from '../assets/fb.png';
import FacebookLogo from '../assets/gogglee.png';

const Signup=  ({ backgroundColor = '#f7f7f7', text = 'Sign up' }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>{text}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <Text style={styles.footerLink}>Sign in</Text>
            </View>
            <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or sign up with social account</Text>
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={[styles.socialButton, { marginRight: 10 }]}>
                    {/* Menggunakan logo lokal */}
                    <Image source={GoogleLogo} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    {/* Menggunakan logo lokal */}
                    <Image source={FacebookLogo} style={styles.socialIcon} />
                </TouchableOpacity>
            </View>
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
        backgroundColor: 'red',
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
        justifyContent: 'space-between',
        width: '10',
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
        width: 24,
        height: 24,
    },
});

export default Signup;
