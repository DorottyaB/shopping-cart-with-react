import './cart-modal.css';

function CartModal() {
  return (
    <div className='cart-modal-container visible'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#f1f1f1'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
          <polyline points='22 4 12 14.01 9 11.01'></polyline>
        </svg>
      </div>
      <p>Added to cart</p>
    </div>
  );
}

export default CartModal;
