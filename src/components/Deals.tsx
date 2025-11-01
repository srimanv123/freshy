import { Clock, Percent, Zap } from 'lucide-react';

export default function Deals() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Limited Time Offers
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fresh Deals & Offers</h2>
          <p className="text-lg text-gray-600">Grab these amazing deals before they expire</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 lg:p-12 text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                <Clock className="w-4 h-4" />
                Ends in 12:45:30
              </div>
              <h3 className="text-4xl font-bold mb-4">Deal of the Day</h3>
              <p className="text-xl mb-6 text-white/90">Fresh Organic Vegetables</p>
              <div className="flex items-end gap-3 mb-6">
                <div className="text-6xl font-bold">50%</div>
                <div className="text-2xl pb-2">OFF</div>
              </div>
              <button className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 font-bold text-lg transition shadow-xl">
                Shop Now
              </button>
            </div>
            <div className="absolute right-0 bottom-0 text-9xl opacity-20">🥕</div>
          </div>

          <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 lg:p-12 text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                <Percent className="w-4 h-4" />
                New Customer Offer
              </div>
              <h3 className="text-4xl font-bold mb-4">First Order Special</h3>
              <p className="text-xl mb-6 text-white/90">Seasonal Fresh Fruits</p>
              <div className="flex items-end gap-3 mb-6">
                <div className="text-6xl font-bold">30%</div>
                <div className="text-2xl pb-2">OFF</div>
              </div>
              <button className="px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-green-50 font-bold text-lg transition shadow-xl">
                Claim Offer
              </button>
            </div>
            <div className="absolute right-0 bottom-0 text-9xl opacity-20">🍎</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition">
            <div className="text-4xl mb-3">🥭</div>
            <h4 className="font-bold text-gray-900 mb-1">Mango Mania</h4>
            <p className="tex
              t-sm text-gray-600 mb-3">Buy 2 Get 1 Free</p>
            <span className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-semibold">
              Save ₹180
            </span>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition">
            <div className="text-4xl mb-3">🥬</div>
            <h4 className="font-bold text-gray-900 mb-1">Green Bundle</h4>
            <p className="text-sm text-gray-600 mb-3">5 Veggies for ₹99</p>
            <span className="text-xs px-3 py-1 bg-purple-500 text-white rounded-full font-semibold">
              Save ₹150
            </span>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border-2 border-pink-200 hover:border-pink-400 transition">
            <div className="text-4xl mb-3">🍊</div>
            <h4 className="font-bold text-gray-900 mb-1">Citrus Combo</h4>
            <p className="text-sm text-gray-600 mb-3">20% Off All Citrus</p>
            <span className="text-xs px-3 py-1 bg-pink-500 text-white rounded-full font-semibold">
              Today Only
            </span>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition">
            <div className="text-4xl mb-3">🥕</div>
            <h4 className="font-bold text-gray-900 mb-1">Root Special</h4>
            <p className="text-sm text-gray-600 mb-3">Fresh at ₹30/kg</p>
            <span className="text-xs px-3 py-1 bg-amber-500 text-white rounded-full font-semibold">
              Limited Stock
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
