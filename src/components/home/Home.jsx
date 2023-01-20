import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-img.jpg';
import './home.css';

function Home() {
  const styles = {
    backgroundImage: `url(${heroImage})`,
  };
  return (
    <main className='main--home' style={styles}>
      <div className='hero-text-container'>
        <h2>New collection</h2>
        <h1>Natural knitted & embroidered cushions</h1>
        <p>Instantly add texture to your home with these chunky textured cushions.</p>
        <Link to='/shop' className='cta-btn'>
          <span>See products</span>
          <svg width='13px' height='10px' viewBox='0 0 13 10'>
            <path d='M1,5 L11,5'></path>
            <polyline points='8 1 12 5 8 9'></polyline>
          </svg>
        </Link>
      </div>
    </main>
  );
}

export default Home;
