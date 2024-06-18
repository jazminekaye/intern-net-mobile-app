import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function ForgotPassword({ navigation }) { // Add navigation prop
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    // Implement your password reset logic here
    Alert.alert('Password Reset', `Password reset link sent to ${email}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Intern-net</Text>
      </View>
      <View style={styles.formContainer}>
        <Image source={require('./padlock.png')} style={styles.padlockImage} />
        <Text style={styles.text}>
          Enter your Email, phone number, or username and we'll send you a link to change a new password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number, Username or Email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.createAccount}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    position: 'absolute',
    top: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 54,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    marginTop: 25,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  padlockImage: {
    width: 100,
    height: 100, 
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  createAccount: {
    fontFamily: 'sans-serif',
    marginRight: 5,
  },
  signUp: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
