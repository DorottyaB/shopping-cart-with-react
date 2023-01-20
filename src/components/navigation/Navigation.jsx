import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import CartModal from '../modal/CartModal';
import CartIcon from './cart-icon/CartIcon';

import './navigation.css';

function Navigation() {
  const { totalAmount, isOpen } = useContext(CartContext);

  return (
    <>
      <nav>
        <div className='home-link-container'>
          <Link to='/'>
            C
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#212121'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'></path>
            </svg>
            zyCloud
          </Link>
        </div>
        <div className='links-container'>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>
            <CartIcon total={totalAmount} />
          </Link>
        </div>
        {isOpen && <CartModal />}
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
