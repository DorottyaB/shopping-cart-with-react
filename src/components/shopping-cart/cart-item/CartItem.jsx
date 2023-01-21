import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/cartContext';
import './cart-item.css';

function CartItem({ image, id, name, price, amount }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div key={id} className='cart-item'>
      <div className='grid-container'>
        <div className='cart-image-container'>
          <img src={image} alt='cushion' />
        </div>
        <h4>{name}</h4>
        <Link to={`/products/${id}`}>View more details</Link>
      </div>
      <div className='amount-container'>
        <p>{amount}</p>
        <div className='caret-container'>
          <button onClick={() => dispatch({ type: 'increase_amount', id: id })}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              fill='#151515'
              viewBox='0 0 256 256'
            >
              <rect width='256' height='256' fill='none'></rect>
              <polyline
                points='48 160 128 80 208 160'
                fill='none'
                stroke='#151515'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='12'
              ></polyline>
            </svg>
          </button>
          <button onClick={() => dispatch({ type: 'decrease_amount', id: id })}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              fill='#151515'
              viewBox='0 0 256 256'
            >
              <rect width='256' height='256' fill='none'></rect>
              <polyline
                points='208 96 128 176 48 96'
                fill='none'
                stroke='#151515'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='12'
              ></polyline>
            </svg>
          </button>
        </div>
      </div>
      <p className='item-price'>${price * amount}</p>
      <button
        onClick={() => dispatch({ type: 'remove_item_from_cart', id: id })}
        className='remove-btn'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          fill='#232323'
          viewBox='0 0 256 256'
        >
          <rect width='256' height='256' fill='none'></rect>
          <circle
            cx='128'
            cy='128'
            r='96'
            fill='none'
            stroke='#232323'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='12'
          ></circle>
          <line
            x1='160'
            y1='96'
            x2='96'
            y2='160'
            fill='none'
            stroke='#232323'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='12'
          ></line>
          <line
            x1='160'
            y1='160'
            x2='96'
            y2='96'
            fill='none'
            stroke='#232323'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='12'
          ></line>
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
