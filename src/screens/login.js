import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === "retailpulse") {
        navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#555555"
        value={username}
        onChangeText={setUsername}
        selectionColor="#d3d3d3"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#555555"
        value={password}
        onChangeText={setPassword}
        selectionColor="#d3d3d3"
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#1e90ff"  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  input: {
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    padding: 10,
    color: 'white',
    fontSize: 16,
    width: width * 0.8,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: width * 0.8,
    alignSelf: 'center',
  },
});

export default LoginScreen;
