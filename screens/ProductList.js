import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { API_BASE } from '@env';
// const API_BASE = Constants.expoConfig.extra.API_BASE;
const ITEM_HEIGHT = 150;
import { useCartStore } from '../store/cartStore';
export default function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);




const fetchProducts = async () => {
  if (loading || !hasMore) return;
  setLoading(true);

  try {
    const res = await axios.get(`${API_BASE}/products?page=${page}`);
    const newProducts = res.data.data;

    setProducts(prev => {
      const existingIds = new Set(prev.map(p => p.id));
      const filteredNew = newProducts.filter(p => !existingIds.has(p.id));
      return [...prev, ...filteredNew];
    });

    setHasMore(newProducts.length > 0);
    setPage(prev => prev + 1);
  } catch (err) {
    console.error(err);
    Alert.alert('Error', 'Failed to load products');
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    useCartStore.getState().addToCart(product);
    Alert.alert('Cart', `${product.name} added to cart`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={fetchProducts}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={15}
      removeClippedSubviews={true}
      getItemLayout={(_, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      ListFooterComponent={
        loading ? <ActivityIndicator size="large" style={{ margin: 20 }} /> : null
      }
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    height: ITEM_HEIGHT - 10,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555', marginVertical: 5 },
  price: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
