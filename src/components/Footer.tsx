import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2c-.55 0-1 .45-1 1v1.07C6.53 4.56 4.56 6.53 4.07 9H3c-.55 0-1 .45-1 1s.45 1 1 1h1.07c.49 2.47 2.46 4.44 4.93 4.93V17c0 .55.45 1 1 1s1-.45 1-1v-1.07c2.47-.49 4.44-2.46 4.93-4.93H17c.55 0 1-.45 1-1s-.45-1-1-1h-1.07c-.49-2.47-2.46-4.44-4.93-4.93V3c0-.55-.45-1-1-1zm0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Freshy</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting farmers, merchants, and customers for fresh, sustainable produce.
              Supporting local agriculture while delivering quality to your doorstep.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition">How It Works</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Investment Portal</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Become a Merchant</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Join as Farmer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-green-500 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div>1800-123-4567</div>
                  <div className="text-sm text-gray-400">Mon-Sat 9AM-7PM</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>support@freshy.com</div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>Mumbai, Maharashtra, India</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-gray-400">Download Our App:</span>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  VISA
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  MC
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  UPI
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2025 Freshy. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <a href="#" className="hover:text-green-500 transition">Sitemap</a>
                <a href="#" className="hover:text-green-500 transition">Careers</a>
                <a href="#" className="hover:text-green-500 transition">Blog</a>
                <a href="#" className="hover:text-green-500 transition">Press</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-800 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-sm">Get fresh deals and updates delivered to your inbox</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 transition"
              />
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
