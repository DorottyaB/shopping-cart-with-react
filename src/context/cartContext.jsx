import { createContext, useEffect, useReducer, useState } from 'react';
import { cartReducer } from '../reducer/cartReducer';

export const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const CartContextProvider = props => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [totalAmount, setTotalAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTotalAmount(state.cartItems.reduce((total, cartItem) => total + cartItem.amount, 0));
    setValue(
      state.cartItems.reduce((total, cartItem) => total + cartItem.amount * cartItem.price, 0)
    );
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch, totalAmount, value, isOpen, setIsOpen }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
