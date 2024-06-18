import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Signup({ navigation }) {
  const [emailPhone, setEmailPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    Alert.alert('Signup Info', `Full Name: ${fullName}\nUsername: ${username}\nEmail/Phone: ${emailPhone}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Intern-net</Text>
        <Text style={styles.text}> Real-World Experience for Future Professionals</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          value={emailPhone}
          onChangeText={setEmailPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.haveAccountText}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>Log in</Text>
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
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: 35,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
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
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  haveAccountText: {
    fontFamily: 'sans-serif',
    marginRight: 5,
  },
  loginText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
               