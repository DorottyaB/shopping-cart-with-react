import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Product from './components/product/Product';
import Shop from './components/shop/Shop';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import CartContextProvider from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='cart' element={<ShoppingCart />} />
          <Route path='products/:productId' element={<Product />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
}

export default App;
