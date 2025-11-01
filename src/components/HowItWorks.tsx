import { Sprout, PackageCheck, Truck } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Freshy Works</h2>
          <p className="text-lg text-gray-600">From farm to your doorstep in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-xl">
                  <Sprout className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Farmers Grow Fresh Produce</h3>
              <p className="text-gray-600 leading-relaxed">
                Local farmers cultivate high-quality fruits and vegetables using sustainable farming practices
              </p>
            </div>

            <div className="hidden md:block absolute top-12 left-full w-full h-1">
              <div className="w-1/2 h-full border-t-2 border-dashed border-gray-300"></div>
            </div>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                  <PackageCheck className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Check & Stock</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted merchants verify quality, package carefully, and ensure freshness at every step
              </p>
            </div>

            <div className="hidden md:block absolute top-12 left-full w-full h-1">
              <div className="w-1/2 h-full border-t-2 border-dashed border-gray-300"></div>
            </div>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                  <Truck className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery to You</h3>
              <p className="text-gray-600 leading-relaxed">
                Get farm-fresh produce delivered to your doorstep within 24 hours with care
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Fresh Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24hrs</div>
              <div className="text-gray-700 font-medium">Fast Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Local Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
