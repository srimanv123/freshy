import { Star, MapPin, ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  merchant: string;
  merchantLocation: string;
  farmer: string;
  farmerDistance: string;
  rating: number;
  inStock: boolean;
  organic?: boolean;
}

export default function ProductCard({
  name,
  price,
  image,
  merchant,
  merchantLocation,
  farmer,
  farmerDistance,
  rating,
  inStock,
  organic = false,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {image}
        </div>

        {organic && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
            Organic
          </div>
        )}

        {!inStock && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
            Limited Stock
          </div>
        )}

        <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg hover:bg-green-50">
          <Eye className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{rating}</span>
            <span className="text-sm text-gray-500">(120 reviews)</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Store className="w-4 h-4 text-blue-600" />
            <span className="font-medium">{merchant}</span>
            <span className="text-gray-400">•</span>
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{merchantLocation}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Tractor className="w-4 h-4 text-green-600" />
            <span className="text-xs">From {farmer}</span>
            <span className="text-gray-400">•</span>
            <span className="text-xs">{farmerDistance}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <div className="text-2xl font-bold text-gray-900">₹{price}</div>
            <div className="text-xs text-gray-500">per kg</div>
          </div>

          <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition flex items-center gap-2 font-semibold shadow-md shadow-green-200">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function Store({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
}

function Tractor({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V3a1 1 0 011-1z" />
    </svg>
  );
}
