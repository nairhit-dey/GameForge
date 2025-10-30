import { Cpu, Zap, Shield, Star, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Quantum Controller',
      price: '$149.99',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Next-gen wireless controller with haptic feedback'
    },
    {
      id: '2',
      name: 'VR Headset Pro',
      price: '$599.99',
      image: 'https://images.pexels.com/photos/7241389/pexels-photo-7241389.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '4K resolution VR experience with 120Hz refresh rate'
    },
    {
      id: '3',
      name: 'Gaming Keyboard Elite',
      price: '$199.99',
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mechanical switches with customizable RGB lighting'
    },
    {
      id: '4',
      name: 'Pro Gaming Mouse',
      price: '$89.99',
      image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ultra-precise sensor with ergonomic design'
    }
  ];

  const features = [
    {
      icon: <Star size={24} />,
      title: 'Premium Quality',
      description: 'Handcrafted with attention to every detail'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Driven',
      description: 'Built based on feedback from millions of gamers'
    },
    {
      icon: <Award size={24} />,
      title: 'Award Winning',
      description: 'Recognized by industry leaders worldwide'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Where Innovation
              <br />
              Meets Gaming
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Premium gaming hardware designed for champions.
              Engineered with precision, built for performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/shop"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Products
                <ArrowRight size={20} />
              </a>
              <button className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Gaming Setup"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our latest collection of professional gaming equipment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                    <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-square block">
                      <button className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <ArrowRight size={20} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/shop"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View All Products
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose GameForge
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the difference that quality and innovation make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powered by innovations that redefine gaming performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Advanced Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Next-generation processors deliver uncompromising performance for the most demanding games
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Zero Latency
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Experience instant response times with our proprietary ultra-low latency technology
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Durable Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Premium materials and rigorous testing ensure reliability through millions of gaming hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-900 dark:bg-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white dark:text-gray-900 mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8">
            Join thousands of gamers who trust GameForge for their competitive edge
          </p>
          <a
            href="/shop"
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105"
          >
            Start Shopping
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Controllers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Headsets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Keyboards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mice</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 GameForge. All rights reserved. Made with ❤️ in Bangladesh</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
