// // // // import React from 'react';
// // // // import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// // // // import { useCartStore } from '../store/cartStore';

// // // // export default function CartScreen() {
// // // //   const { items, removeFromCart } = useCartStore();

// // // //   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// // // //   const renderItem = ({ item }) => (
// // // //     <View style={styles.card}>
// // // //       <Text style={styles.name}>{item.name}</Text>
// // // //       <Text style={styles.price}>
// // // //         ${item.price} x {item.quantity} = ${item.price * item.quantity}
// // // //       </Text>
// // // //       <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.button}>
// // // //         <Text style={styles.buttonText}>Remove</Text>
// // // //       </TouchableOpacity>
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <View style={{ flex: 1, padding: 10 }}>
// // // //       {items.length === 0 ? (
// // // //         <Text>Your cart is empty</Text>
// // // //       ) : (
// // // //         <>
// // // //           <FlatList
// // // //             data={items}
// // // //             keyExtractor={item => item.id.toString()}
// // // //             renderItem={renderItem}
// // // //           />
// // // //           <Text style={styles.total}>Total: ${total}</Text>
// // // //         </>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   card: { padding: 15, backgroundColor: '#fff', marginBottom: 10, borderRadius: 8 },
// // // //   name: { fontSize: 16, fontWeight: 'bold' },
// // // //   price: { fontSize: 14, marginVertical: 5 },
// // // //   button: { backgroundColor: '#ff4444', padding: 5, borderRadius: 5, alignSelf: 'flex-start' },
// // // //   buttonText: { color: '#fff', fontWeight: 'bold' },
// // // //   total: { fontSize: 18, fontWeight: 'bold', textAlign: 'right', marginTop: 10 },
// // // // });


// // // import React from 'react';
// // // import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// // // import { useCartStore } from '../store/cartStore';

// // // export default function CartScreen() {
// // //   const { items, removeFromCart, incrementQuantity, decrementQuantity } = useCartStore();
// // //   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// // //   const renderItem = ({ item }) => (
// // //     <View style={styles.card}>
// // //       <Text style={styles.name}>{item.name}</Text>
// // //       <Text style={styles.price}>
// // //         ${item.price} x {item.quantity} = ${item.price * item.quantity}
// // //       </Text>

// // //       <View style={styles.quantityContainer}>
// // //         <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.qtyButton}>
// // //           <Text style={styles.qtyButtonText}>-</Text>
// // //         </TouchableOpacity>

// // //         <Text style={styles.qtyText}>{item.quantity}</Text>

// // //         <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.qtyButton}>
// // //           <Text style={styles.qtyButtonText}>+</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
// // //         <Text style={styles.buttonText}>Remove</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );

// // //   return (
// // //     <View style={{ flex: 1, padding: 10 }}>
// // //       {items.length === 0 ? (
// // //         <Text>Your cart is empty</Text>
// // //       ) : (
// // //         <>
// // //           <FlatList
// // //             data={items}
// // //             keyExtractor={item => item.id.toString()}
// // //             renderItem={renderItem}
// // //           />
// // //           <Text style={styles.total}>Total: ${total}</Text>
// // //         </>
// // //       )}
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   card: { padding: 15, backgroundColor: '#fff', marginBottom: 10, borderRadius: 8 },
// // //   name: { fontSize: 16, fontWeight: 'bold' },
// // //   price: { fontSize: 14, marginVertical: 5 },
// // //   quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
// // //   qtyButton: {
// // //     backgroundColor: '#007bff',
// // //     paddingHorizontal: 10,
// // //     paddingVertical: 5,
// // //     borderRadius: 5,
// // //   },
// // //   qtyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// // //   qtyText: { marginHorizontal: 10, fontSize: 16 },
// // //   removeButton: { backgroundColor: '#ff4444', padding: 5, borderRadius: 5, marginTop: 5 },
// // //   buttonText: { color: '#fff', fontWeight: 'bold' },
// // //   total: { fontSize: 18, fontWeight: 'bold', textAlign: 'right', marginTop: 10 },
// // // });


// // import React from 'react';
// // import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// // import { useCartStore } from '../store/cartStore';

// // export default function CartScreen() {
// //   const { items, removeFromCart, incrementQuantity, decrementQuantity } = useCartStore();

// //   // Helper to format price to 2 decimal points
// //   const formatPrice = (price) => Number(price.toFixed(2));

// //   const total = formatPrice(
// //     items.reduce((sum, item) => sum + item.price * item.quantity, 0)
// //   );

// //   const renderItem = ({ item }) => (
// //     <View style={styles.card}>
// //       <Text style={styles.name}>{item.name}</Text>

// //       <Text style={styles.price}>
// //         ${formatPrice(item.price)} x {item.quantity} = ${formatPrice(item.price * item.quantity)}
// //       </Text>

// //       <View style={styles.quantityContainer}>
// //         <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.qtyButton}>
// //           <Text style={styles.qtyButtonText}>-</Text>
// //         </TouchableOpacity>

// //         <Text style={styles.qtyText}>{item.quantity}</Text>

// //         <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.qtyButton}>
// //           <Text style={styles.qtyButtonText}>+</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
// //         <Text style={styles.buttonText}>Remove</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   return (
// //     <View style={{ flex: 1, padding: 10 }}>
// //       {items.length === 0 ? (
// //         <Text>Your cart is empty</Text>
// //       ) : (
// //         <>
// //           <FlatList
// //             data={items}
// //             keyExtractor={item => item.id.toString()}
// //             renderItem={renderItem}
// //           />
// //           <Text style={styles.total}>Total: ${total}</Text>
// //         </>
// //       )}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   card: { padding: 15, backgroundColor: '#fff', marginBottom: 10, borderRadius: 8 },
// //   name: { fontSize: 16, fontWeight: 'bold' },
// //   price: { fontSize: 14, marginVertical: 5 },
// //   quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
// //   qtyButton: {
// //     backgroundColor: '#007bff',
// //     paddingHorizontal: 10,
// //     paddingVertical: 5,
// //     borderRadius: 5,
// //   },
// //   qtyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// //   qtyText: { marginHorizontal: 10, fontSize: 16 },
// //   removeButton: { backgroundColor: '#ff4444', padding: 5, borderRadius: 5, marginTop: 5 },
// //   buttonText: { color: '#fff', fontWeight: 'bold' },
// //   total: { fontSize: 18, fontWeight: 'bold', textAlign: 'right', marginTop: 10 },
// // });

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { useCartStore } from '../store/cartStore';

// export default function CartScreen() {
//   const { items, removeFromCart, incrementQuantity, decrementQuantity } = useCartStore();

//   const formatPrice = (price) => Number(price.toFixed(2));

//   const total = formatPrice(
//     items.reduce((sum, item) => sum + item.price * item.quantity, 0)
//   );

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <View style={styles.cardHeader}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>${formatPrice(item.price)}</Text>
//       </View>

//       <View style={styles.quantityContainer}>
//         <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.qtyButton}>
//           <Text style={styles.qtyButtonText}>-</Text>
//         </TouchableOpacity>

//         <Text style={styles.qtyText}>{item.quantity}</Text>

//         <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.qtyButton}>
//           <Text style={styles.qtyButtonText}>+</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
//           <Text style={styles.removeButtonText}>Remove</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1, padding: 15, backgroundColor: '#f2f2f2' }}>
//       {items.length === 0 ? (
//         <Text style={styles.emptyText}>Your cart is empty</Text>
//       ) : (
//         <>
//           <FlatList
//             data={items}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={renderItem}
//             contentContainerStyle={{ paddingBottom: 20 }}
//           />

//           <View style={styles.totalContainer}>
//             <Text style={styles.totalText}>Total: ${total}</Text>
//           </View>
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3, // shadow for Android
//     shadowColor: '#000', // shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   name: { fontSize: 16, fontWeight: 'bold' },
//   price: { fontSize: 16, fontWeight: '600', color: '#333' },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   qtyButton: {
//     backgroundColor: '#007bff',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 5,
//   },
//   qtyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
//   qtyText: { marginHorizontal: 12, fontSize: 16, fontWeight: '500' },
//   removeButton: {
//     marginLeft: 20,
//     backgroundColor: '#ff4444',
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 5,
//   },
//   removeButtonText: { color: '#fff', fontWeight: 'bold' },
//   totalContainer: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 12,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   emptyText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 50,
//     color: '#777',
//   },
// });


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
