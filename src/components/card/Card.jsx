import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import './card.css';

function Card({ name, price, image, id }) {
  const { dispatch, setIsOpen } = useContext(CartContext);

  async function handleSubmit() {
    const amount = 1;
    dispatch({ type: 'add_to_cart', cartItem: { name, price, image, id, amount } });
    await setIsOpen(true);
    setTimeout(() => setIsOpen(false), 4000);
  }

  return (
    <div className='card'>
      <div className='card-image-container'>
        <img src={image} alt='cushion' loading='lazy' />
      </div>
      <div className='card-text-container'>
        <h3>{name}</h3>
        <span>${price}</span>
        <Link to={`/products/${id}`}>More details</Link>
        <button className='add-to-cart-btn ripple' onClick={handleSubmit}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
