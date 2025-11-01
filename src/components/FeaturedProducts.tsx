import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    price: 45,
    image: '🍅',
    merchant: 'Fresh Market',
    merchantLocation: 'Delhi',
    farmer: 'Ram Kumar',
    farmerDistance: '15 km away',
    rating: 4.5,
    inStock: true,
    organic: true,
  },
  {
    id: 2,
    name: 'Fresh Apples',
    price: 120,
    image: '🍎',
    merchant: 'Fruit Paradise',
    merchantLocation: 'Mumbai',
    farmer: 'Suresh Patil',
    farmerDistance: '25 km away',
    rating: 4.8,
    inStock: true,
    organic: false,
  },
  {
    id: 3,
    name: 'Green Spinach',
    price: 30,
    image: '🥬',
    merchant: 'Veggie Store',
    merchantLocation: 'Bangalore',
    farmer: 'Lakshmi Devi',
    farmerDistance: '10 km away',
    rating: 4.6,
    inStock: false,
    organic: true,
  },
  {
    id: 4,
    name: 'Fresh Carrots',
    price: 40,
    image: '🥕',
    merchant: 'Organic Mart',
    merchantLocation: 'Pune',
    farmer: 'Vijay Singh',
    farmerDistance: '20 km away',
    rating: 4.7,
    inStock: true,
    organic: true,
  },
  {
    id: 5,
    name: 'Ripe Mangoes',
    price: 180,
    image: '🥭',
    merchant: 'Tropical Fruits',
    merchantLocation: 'Hyderabad',
    farmer: 'Raju Reddy',
    farmerDistance: '30 km away',
    rating: 4.9,
    inStock: true,
    organic: false,
  },
  {
    id: 6,
    name: 'Fresh Cucumbers',
    price: 25,
    image: '🥒',
    merchant: 'Green Basket',
    merchantLocation: 'Chennai',
    farmer: 'Murugan',
    farmerDistance: '12 km away',
    rating: 4.4,
    inStock: true,
    organic: true,
  },
  {
    id: 7,
    name: 'Sweet Oranges',
    price: 60,
    image: '🍊',
    merchant: 'Citrus Hub',
    merchantLocation: 'Nagpur',
    farmer: 'Prakash Joshi',
    farmerDistance: '18 km away',
    rating: 4.5,
    inStock: true,
    organic: false,
  },
  {
    id: 8,
    name: 'Bell Peppers',
    price: 55,
    image: '🫑',
    merchant: 'Veggie Paradise',
    merchantLocation: 'Ahmedabad',
    farmer: 'Jayesh Patel',
    farmerDistance: '22 km away',
    rating: 4.3,
    inStock: true,
    organic: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-lg text-gray-600">Fresh picks from local farms</p>
          </div>
          <button className="px-6 py-3 text-green-600 hover:bg-green-50 rounded-xl font-semibold transition">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
