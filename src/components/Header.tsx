import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2c-.55 0-1 .45-1 1v1.07C6.53 4.56 4.56 6.53 4.07 9H3c-.55 0-1 .45-1 1s.45 1 1 1h1.07c.49 2.47 2.46 4.44 4.93 4.93V17c0 .55.45 1 1 1s1-.45 1-1v-1.07c2.47-.49 4.44-2.46 4.93-4.93H17c.55 0 1-.45 1-1s-.45-1-1-1h-1.07c-.49-2.47-2.46-4.44-4.93-4.93V3c0-.55-.45-1-1-1zm0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-green-600">Freshy</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition">Fruits</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition">Vegetables</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition">Investment Portal</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition">My Orders</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition">About Us</a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg font-medium transition">
              Login
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition">
              Sign Up
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <User className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="pb-4 pt-2">
          <div className={`relative max-w-2xl mx-auto transition-all ${searchFocus ? 'scale-105' : ''}`}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for fresh fruits, vegetables..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="px-4 py-4 space-y-3">
            <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Fruits</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Vegetables</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Investment Portal</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">My Orders</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">About Us</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2 text-green-600 border border-green-600 rounded-lg font-medium">
                Login
              </button>
              <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
