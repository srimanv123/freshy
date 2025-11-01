import { Carrot, Apple, Leaf, TrendingUp, Store, Tractor } from 'lucide-react';

const categories = [
  { icon: Carrot, name: 'Fresh Vegetables', color: 'from-green-400 to-green-500', count: '250+' },
  { icon: Apple, name: 'Seasonal Fruits', color: 'from-red-400 to-red-500', count: '180+' },
  { icon: Leaf, name: 'Organic Products', color: 'from-emerald-400 to-emerald-500', count: '120+' },
  { icon: TrendingUp, name: 'Investment Portal', color: 'from-orange-400 to-orange-500', count: '7.5% Returns' },
  { icon: Store, name: 'Browse Merchants', color: 'from-blue-400 to-blue-500', count: '300+' },
  { icon: Tractor, name: 'Browse Farmers', color: 'from-amber-400 to-amber-500', count: '500+' },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
          <p className="text-lg text-gray-600">Find exactly what you need from our diverse selection</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className="group p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-green-500 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center group-hover:text-green-600 transition">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">{category.count}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
