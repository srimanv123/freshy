import { TrendingUp, Shield, Eye, Calculator, ArrowRight } from 'lucide-react';

export default function Investment() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Investment Opportunity
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Invest in a Fresh Future
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Earn <span className="font-bold text-orange-600">7.5% Annual Returns</span> while supporting local farmers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-orange-100">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">7.5% Returns</h3>
            <p className="text-gray-600">Fixed annual returns on your investment</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-green-100">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100% Secure</h3>
            <p className="text-gray-600">Your investment is safe and transparent</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-blue-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Track Live</h3>
            <p className="text-gray-600">Monitor your investment in real-time</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-purple-100">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Calculator className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-gray-600">Quarterly payouts with zero hassle</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Choose Your Investment</h4>
                    <p className="text-gray-600">Select from various farm projects and investment amounts</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Support Local Farmers</h4>
                    <p className="text-gray-600">Your investment helps farmers with resources and technology</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Earn Steady Returns</h4>
                    <p className="text-gray-600">Receive 7.5% annual returns with quarterly payouts</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-4">Investment Calculator</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment Amount:</span>
                    <span className="font-bold text-gray-900">₹50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Return (7.5%):</span>
                    <span className="font-bold text-green-600">₹3,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Return:</span>
                    <span className="font-bold text-green-600">₹312</span>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full px-8 py-4 bg-orange-600 text-white rounded-xl hover:bg-orange-700 font-semibold text-lg transition flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                Start Investing Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600 mb-1">Total Investment</div>
                  <div className="text-3xl font-bold text-gray-900">₹245 Crore</div>
                  <div className="text-sm text-green-600 mt-1">by 45,000+ investors</div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600 mb-1">Farmers Supported</div>
                  <div className="text-3xl font-bold text-gray-900">2,500+</div>
                  <div className="text-sm text-green-600 mt-1">across 15 states</div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600 mb-1">Average Returns</div>
                  <div className="text-3xl font-bold text-gray-900">7.5%</div>
                  <div className="text-sm text-green-600 mt-1">consistent yearly</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">No hidden charges</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Quarterly payouts</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Full transparency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
