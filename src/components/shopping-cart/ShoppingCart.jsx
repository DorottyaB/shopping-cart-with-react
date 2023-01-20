import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import CartItem from './cart-item/CartItem';
import './shopping-cart.css';

function ShoppingCart() {
  const { state, totalAmount, value } = useContext(CartContext);
  const cartItems = state.cartItems;

  return (
    <main className='main--cart'>
      <div className='cart-summary'>
        <h2>Shopping cart</h2>
        <span>
          Your cart contains <strong>{totalAmount}</strong> {totalAmount < 2 ? 'item' : 'items'} and
          comes to a total of <strong>${value}</strong>.
        </span>
        <Link to='/shop'>Shop more</Link>
      </div>
      {cartItems.length > 0 && (
        <div className='cart-body'>
          <div className='cart-head-row'>
            <h3>Items</h3>
            <h3>Quantity</h3>
            <h3>Value</h3>
            <h3>Remove</h3>
          </div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className='right-align'>
          <p className='cart-total'>Total: ${value}</p>
          <p>
            Excluding standard delivery <span>(normally $5.50)</span>
          </p>
          <button className='checkout-btn ripple'>Go to checkout</button>
        </div>
      )}
    </main>
  );
}

export default ShoppingCart;
