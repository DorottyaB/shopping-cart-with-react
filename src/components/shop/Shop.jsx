import { products } from '../../data';
import Card from '../card/Card';
import './shop.css';

function Shop() {
  return (
    <main className='main--shop'>
      <h2>Our Products</h2>
      <div className='product-cards-container'>
        {products.map(product => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.imageUrl}
            id={product.id}
          />
        ))}
      </div>
    </main>
  );
}

export default Shop;
