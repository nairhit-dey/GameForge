import { Gamepad2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Gamepad2 size={28} className="text-gray-900" />
            <span className="text-xl font-semibold text-gray-900">GameForge</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/shop"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Shop
            </a>
            <a
              href="/#technology"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Technology
            </a>
            <a
              href="/#features"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Features
            </a>
            <button
              onClick={onCartClick}
              className="relative bg-gray-900 text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative bg-gray-900 text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
