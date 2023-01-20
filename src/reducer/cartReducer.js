export function cartReducer(state, action) {
  switch (action.type) {
    case 'add_to_cart':
      const productToAdd = state.cartItems.find(item => item.id === action.cartItem.id);
      if (productToAdd) {
        return {
          ...state,
          cartItems: state.cartItems.map(cartItem =>
            cartItem.id === productToAdd.id
              ? { ...cartItem, amount: cartItem.amount + 1 }
              : cartItem
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.cartItem],
      };
    case 'remove_item_from_cart':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.id),
      };
    case 'increase_amount':
      const itemToIncrease = state.cartItems.find(item => item.id === action.id);
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === itemToIncrease.id ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    case 'decrease_amount':
      const productToDecrease = state.cartItems.find(item => item.id === action.id);
      if (productToDecrease.amount === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.id),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map(cartItem =>
            cartItem.id === productToDecrease.id
              ? { ...cartItem, amount: cartItem.amount - 1 }
              : cartItem
          ),
        };
      }
    default:
      return state;
  }
}
