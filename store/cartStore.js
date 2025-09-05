import { create } from 'zustand';

export const useCartStore = create(set => ({
  items: [],

  addToCart: (product) =>
    set(state => {
      // Check if item already exists in cart
      const exists = state.items.find(item => item.id === product.id);
      if (exists) return state;
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (productId) =>
    set(state => ({
      items: state.items.filter(item => item.id !== productId),
    })),

  incrementQuantity: (productId) =>
    set(state => ({
      items: state.items.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decrementQuantity: (productId) =>
    set(state => ({
      items: state.items.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  getTotal: () => set(state =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  ),
}));
