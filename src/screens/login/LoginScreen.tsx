import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
  Animated,
  ImageBackground,
} from 'react-native';

const LoginScreen = ({ navigation }:any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLogin = () => {
    navigation.navigate('TabNavigator');
  };

  const handleGuest = () => {
    navigation.navigate('TabNavigator'); // Adjust this to the correct guest page
  };

  return (
    <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logoWhite.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>Welcome to Utkal International</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.loginButton} onPress={handleGuest}>
            <Text style={styles.loginButtonText}>Guest</Text>
          </Pressable>
        </View>

        <TouchableOpacity onPress={() => console.log('Forgot Password clicked')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Sign Up clicked')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.platformButtons}>
          {/* Add platform buttons as necessary */}
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  overlay: { flex: 1, justifyContent: 'center', paddingHorizontal: 16 },
  logoContainer: { alignItems: 'center', marginBottom: 16 },
  logo: { width: 190, height: 190, resizeMode: 'contain' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 16, textAlign: 'center' },
  input: { backgroundColor: '#1e1e1e', color: '#fff', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10, fontSize: 16, marginBottom: 16 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  loginButton: { backgroundColor: '#FF4654', paddingVertical: 16, borderRadius: 16, alignItems: 'center', flex: 1, marginHorizontal: 5 },
  loginButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  forgotPasswordText: { color: '#fff', textAlign: 'center', marginBottom: 16, textDecorationLine: 'underline' },
  signUpText: { color: '#fff', textAlign: 'center', marginBottom: 32, textDecorationLine: 'underline' },
  platformButtons: { flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 22 },
});

export default LoginScreen;
