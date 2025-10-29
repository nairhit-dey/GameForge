import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart, Product } from '../context/CartContext';
import { productsData } from '../data/products';
import { useState } from 'react';

export default function Shop() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Shop All Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Browse our complete collection of premium gaming hardware
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-square block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <Eye size={18} />
                    <span className="font-medium">View Details</span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                    addedItems.has(product.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                  }`}
                  disabled={addedItems.has(product.id)}
                >
                  <ShoppingCart size={18} />
                  {addedItems.has(product.id) ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
