
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cartStore';

export default function CartScreen() {
  const { items, removeFromCart, incrementQuantity, decrementQuantity } = useCartStore();

  const formatPrice = (price) => Number(price.toFixed(2));

  const total = formatPrice(
    items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  const renderItem = ({ item }) => {
    const itemTotal = formatPrice(item.price * item.quantity);

    return (
      <View style={styles.card}>
        {/* Product Name */}
        <Text style={styles.name}>{item.name}</Text>

        {/* Per Unit Price */}
        <Text style={styles.unitPrice}>Per unit: ${formatPrice(item.price)}</Text>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.qtyButton}>
            <Text style={styles.qtyButtonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qtyText}>{item.quantity}</Text>

          <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.qtyButton}>
            <Text style={styles.qtyButtonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>

        {/* Updated Item Total */}
        <Text style={styles.itemTotal}>Total: ${itemTotal}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: '#f2f2f2' }}>
      {items.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          {/* Overall Cart Total */}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${total}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  unitPrice: { fontSize: 14, color: '#555', marginBottom: 10 },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  qtyButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  qtyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  qtyText: { marginHorizontal: 12, fontSize: 16, fontWeight: '500' },
  removeButton: {
    marginLeft: 20,
    backgroundColor: '#ff4444',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  removeButtonText: { color: '#fff', fontWeight: 'bold' },
  itemTotal: { fontSize: 14, fontWeight: 'bold', color: '#333', textAlign: 'right' },
  totalContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    color: '#777',
  },
});
