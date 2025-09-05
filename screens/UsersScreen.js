import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
      await AsyncStorage.setItem('users', JSON.stringify(res.data)); // cache data
    } catch (err) {
      const cached = await AsyncStorage.getItem('users');
      if (cached) {
        setUsers(JSON.parse(cached));
      } else {
        console.log('Failed to load users and no cached data found.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.name} ({item.username})</Text>
        <Text style={styles.email}>Email: {item.email}</Text>
        <Text style={styles.phone}>Phone: {item.phone}</Text>
        <Text style={styles.website}>Website: {item.website}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address:</Text>
          <Text>{item.address.street}, {item.address.suite}</Text>
          <Text>{item.address.city} - {item.address.zipcode}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Company:</Text>
          <Text>{item.company.name}</Text>
          <Text style={styles.catchPhrase}>"{item.company.catchPhrase}"</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 15 }}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  email: { fontSize: 14, color: '#555', marginBottom: 2 },
  phone: { fontSize: 14, color: '#555', marginBottom: 2 },
  website: { fontSize: 14, color: '#555', marginBottom: 8 },
  section: { marginTop: 8 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 2 },
  catchPhrase: { fontStyle: 'italic', color: '#333' },
});
