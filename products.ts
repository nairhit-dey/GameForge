import { Product } from '../context/CartContext';

export const productsData: Product[] = [
  {
    id: '1',
    name: 'Quantum Controller',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Next-gen wireless controller with haptic feedback and adaptive triggers'
  },
  {
    id: '2',
    name: 'VR Headset Pro',
    price: 599.99,
    image: 'https://images.pexels.com/photos/7241389/pexels-photo-7241389.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '4K resolution VR experience with 120Hz refresh rate and eye tracking'
  },
  {
    id: '3',
    name: 'Gaming Keyboard Elite',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Mechanical switches with customizable RGB lighting and programmable keys'
  },
  {
    id: '4',
    name: 'Pro Gaming Mouse',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ultra-precise 20,000 DPI sensor with ergonomic design'
  },
  {
    id: '5',
    name: 'Gaming Headset Ultra',
    price: 179.99,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '7.1 surround sound with noise cancellation and premium comfort'
  },
  {
    id: '6',
    name: 'Pro Gaming Chair',
    price: 449.99,
    image: 'https://images.pexels.com/photos/6266304/pexels-photo-6266304.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ergonomic design with lumbar support and adjustable armrests'
  },
  {
    id: '7',
    name: 'Gaming Monitor 4K',
    price: 799.99,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '27-inch 4K display with 144Hz refresh rate and HDR support'
  },
  {
    id: '8',
    name: 'Mechanical Numpad',
    price: 59.99,
    image: 'https://images.pexels.com/photos/4551315/pexels-photo-4551315.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Programmable mechanical numpad with hot-swappable switches'
  },
  {
    id: '9',
    name: 'Gaming Mouse Pad XXL',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Extended gaming surface with anti-slip rubber base'
  },
  {
    id: '10',
    name: 'Cable Management Kit',
    price: 24.99,
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete cable organization solution for clean gaming setup'
  },
  {
    id: '11',
    name: 'Webcam Pro 4K',
    price: 149.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '4K streaming camera with auto-focus and low-light correction'
  },
  {
    id: '12',
    name: 'Stream Deck',
    price: 129.99,
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Customizable control panel with LCD keys for streaming'
  },
  {
    id: '8',
    name: 'Mechanical Numpad',
    price: 59.99,
    image: 'https://images.pexels.com/photos/4551315/pexels-photo-4551315.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Programmable mechanical numpad with hot-swappable switches'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return productsData.find(product => product.id === id);
};

export const getRelatedProducts = (currentProductId: string, limit: number = 4): Product[] => {
  return productsData.filter(product => product.id !== currentProductId).slice(0, limit);
};
