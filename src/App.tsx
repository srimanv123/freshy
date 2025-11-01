import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Investment from './components/Investment';
import HowItWorks from './components/HowItWorks';
import MerchantShowcase from './components/MerchantShowcase';
import Deals from './components/Deals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Investment />
      <HowItWorks />
      <MerchantShowcase />
      <Deals />
      <Footer />
    </div>
  );
}

export default App;
