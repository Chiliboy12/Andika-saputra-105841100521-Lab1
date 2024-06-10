import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Import gambar lokal
import GoogleLogo from '../assets/fb.png';
import FacebookLogo from '../assets/gogglee.png';

const Login = ({ backgroundColor = '#f7f7f7', text = 'Log in' }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>{text}</Text>
            <View style={styles.inputContainer}>
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
                <Text style={styles.footerText}>Don't have an account? </Text>
                <Text style={styles.footerLink}>Sign up</Text>
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or log in with social account</Text>
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={[styles.socialButton, { marginRight: 10 }]}>
                    {/* Menggunakan gambar lokal */}
                    <Image source={GoogleLogo} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    {/* Menggunakan gambar lokal */}
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
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#777',
    },
    footerLink: {
        fontSize: 14,
        color: 'red',
    },
    loginButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    orText: {
        fontSize: 20,
        color: '#777',
        marginBottom: 20, // Mengurangi margin bottom
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // Mengubah agar ikon sosial berdekatan
        width: '100%',
        maxWidth: 150, // Mengatur lebar maksimal untuk memastikan berdekatan
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
        width: 30, // Ubah ukuran menjadi 30
        height: 30, // Ubah ukuran menjadi 30
    },
});

export default Login;
