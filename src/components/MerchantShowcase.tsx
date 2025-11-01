import { Star, MapPin, Package, ArrowRight } from 'lucide-react';

const merchants = [
  {
    id: 1,
    name: 'Fresh Market',
    image: '🏪',
    rating: 4.8,
    reviews: 1240,
    location: 'Delhi',
    products: 156,
    badge: 'Verified',
  },
  {
    id: 2,
    name: 'Organic Mart',
    image: '🛒',
    rating: 4.9,
    reviews: 980,
    location: 'Mumbai',
    products: 203,
    badge: 'Top Rated',
  },
  {
    id: 3,
    name: 'Green Basket',
    image: '🧺',
    rating: 4.7,
    reviews: 750,
    location: 'Bangalore',
    products: 142,
    badge: 'Verified',
  },
  {
    id: 4,
    name: 'Veggie Paradise',
    image: '🥗',
    rating: 4.6,
    reviews: 890,
    location: 'Pune',
    products: 178,
    badge: 'Popular',
  },
  {
    id: 5,
    name: 'Fruit Hub',
    image: '🍇',
    rating: 4.8,
    reviews: 1100,
    location: 'Hyderabad',
    products: 125,
    badge: 'Verified',
  },
];

export default function MerchantShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Shop from Trusted Merchants</h2>
            <p className="text-lg text-gray-600">Quality verified stores near you</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 text-green-600 hover:bg-green-50 rounded-xl font-semibold transition">
            View All Merchants
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 pb-4">
          <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-5 lg:min-w-0">
            {merchants.map((merchant) => (
              <div
                key={merchant.id}
                className="w-64 lg:w-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                <div className="relative h-40 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-7xl">{merchant.image}</div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white rounded-full text-xs font-semibold text-green-600 shadow-md">
                    {merchant.badge}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition">
                      {merchant.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">{merchant.rating}</span>
                      <span className="text-sm text-gray-500">({merchant.reviews})</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{merchant.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Package className="w-4 h-4 text-green-600" />
                      <span>{merchant.products} Products</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold mt-4">
                    View Store
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="md:hidden w-full mt-6 px-6 py-3 text-green-600 border-2 border-green-600 hover:bg-green-50 rounded-xl font-semibold transition flex items-center justify-center gap-2">
          View All Merchants
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
