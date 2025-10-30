import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, ShoppingCart, Truck, Shield, RotateCcw, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById, getRelatedProducts } from '../data/products';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];

  // Scroll to top when component mounts or product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const features = [
    'Premium build quality with attention to detail',
    'Advanced technology for peak performance',
    'Ergonomic design for extended comfort',
    'Customizable settings and configurations',
    'Compatible with all major gaming platforms',
    'Industry-leading warranty and support'
  ];

  const specifications = [
    { label: 'Brand', value: 'GameForge' },
    { label: 'Model', value: product.name },
    { label: 'Warranty', value: '2 Years' },
    { label: 'Shipping', value: 'Free Shipping' },
    { label: 'Stock Status', value: 'In Stock' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gray-900 dark:hover:text-white">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden aspect-square cursor-pointer hover:ring-2 ring-gray-900 dark:ring-white transition-all">
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">(127 reviews)</span>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
              <span className="text-gray-600 dark:text-gray-400 ml-2 line-through text-xl">${(product.price * 1.2).toFixed(2)}</span>
              <span className="ml-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">Save 20%</span>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {product.description}. Engineered with precision and built for champions, this product represents the pinnacle of gaming technology. Experience unmatched performance and reliability.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold text-gray-900 dark:text-white"
                >
                  -
                </button>
                <span className="px-6 py-3 font-semibold text-gray-900 dark:text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold text-gray-900 dark:text-white"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={20} />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center mb-8"
            >
              Buy Now
            </Link>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Truck size={24} className="mx-auto mb-2 text-gray-700 dark:text-gray-300" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Free Shipping</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">On all orders</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Shield size={24} className="mx-auto mb-2 text-gray-700 dark:text-gray-300" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">2 Year Warranty</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Full coverage</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <RotateCcw size={24} className="mx-auto mb-2 text-gray-700 dark:text-gray-300" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">30-Day Returns</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">No questions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Specifications</h2>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{spec.label}</span>
                  <span className="text-gray-900 dark:text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">You May Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
