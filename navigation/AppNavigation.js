// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ProductList from '../screens/ProductList';
// import CartScreen from '../screens/CartScreen';
// import { View, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useCartStore } from '../store/cartStore';

// const Tab = createBottomTabNavigator();

// export default function AppNavigation() {
//   const cartItems = useCartStore(state => state.items);

//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen
//         name="Products"
//         component={ProductList}
//         options={{
//           tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
//         }}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={CartScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <View>
//               <Ionicons name="cart" color={color} size={size} />
//               {cartItems.length > 0 && (
//                 <View
//                   style={{
//                     position: 'absolute',
//                     right: -6,
//                     top: -3,
//                     backgroundColor: 'red',
//                     borderRadius: 8,
//                     width: 16,
//                     height: 16,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>
//                     {cartItems.length}
//                   </Text>
//                 </View>
//               )}
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="User"
//         component={View} // Replace with your user profile screen
//         options={{
//           tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import ProductList from '../screens/ProductList';
import CartScreen from '../screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';
import { useCartStore } from '../store/cartStore';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const cartItems = useCartStore(state => state.items);

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#007bff' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#007bff',
      }}
    >
      <Tab.Screen
        name="Products"
        component={ProductList}
        options={{
          title: 'Products', // Top navbar title
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart', // Top navbar title
          tabBarIcon: ({ color, size }) => (
            <View>
              <Ionicons name="cart" color={color} size={size} />
              {cartItems.length > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    right: -6,
                    top: -3,
                    backgroundColor: 'red',
                    borderRadius: 8,
                    width: 16,
                    height: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>
                    {cartItems.length}
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={View} // Replace with your User Profile screen
        options={{
          title: 'User', // Top navbar title
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
