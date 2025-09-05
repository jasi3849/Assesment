
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation';


const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      UserDetails: 'user/:userId',
      Tabs: {
        screens: {
          Products: 'products',
          Cart: 'cart',
          Users: 'users',
          Auth: 'auth',
        },
      },
    },
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
