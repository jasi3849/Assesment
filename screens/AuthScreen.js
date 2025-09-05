import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function AuthScreen() {
  const [token, setToken] = useState(null);

  // Save dummy token
  const saveToken = async () => {
    const dummyToken = '1234567890abcdef';
    await SecureStore.setItemAsync('authToken', dummyToken);
    setToken(dummyToken);
  };

  // Load token on app start
  const loadToken = async () => {
    const storedToken = await SecureStore.getItemAsync('authToken');
    setToken(storedToken);
  };

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secure Token Storage Demo</Text>
      <Text style={styles.tokenText}>Token: {token || 'No token found'}</Text>
      <Button title="Save Dummy Token" onPress={saveToken} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  tokenText: { fontSize: 16, marginBottom: 20 },
});
