import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { products } from '../../data';
import './product.css';

function Product() {
  const { productId } = useParams();
  const product = products.find(product => product.id === Number(productId));
  const { dispatch, setIsOpen } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  function handleChange(e) {
    const value = e.target.value;
    setAmount(Number(value));
  }

  function decrease() {
    if (amount < 2) {
      setAmount(1);
    } else {
      setAmount(prevAmount => prevAmount - 1);
    }
  }

  async function handleSubmit() {
    const { name, price, imageUrl, id } = product;
    dispatch({ type: 'add_to_cart', cartItem: { name, price, image: imageUrl, id, amount } });
    await setIsOpen(true);
    setTimeout(() => setIsOpen(false), 4000);
  }

  return (
    <main className='main--product'>
      <div className='product-container'>
        <div className='product-image-container'>
          <img src={product.imageUrl} alt='cushion' />
        </div>
        <div className='product-details-container'>
          <h2>{product.name}</h2>
          <p>Size: 50X50cm</p>
          <p className='justify-end'>${product.price}</p>
          <div className='number-input-container'>
            <p>Quantity:</p>
            <input type='number' min='1' max='10' value={amount} onChange={handleChange} />
            <div className='caret-container'>
              <button onClick={() => setAmount(prevAmount => prevAmount + 1)}>
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
              <button onClick={decrease}>
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
          <button className='add-to-cart-btn ripple' onClick={handleSubmit}>
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default Product;
