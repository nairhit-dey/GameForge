import { ShoppingCart } from "lucide-react";
import { useCart, Product } from "../context/CartContext";
import { useState } from "react";

const allProducts: Product[] = [
	{
		id: "1",
		name: "Quantum Controller",
		price: 149.99,
		image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
		description:
			"Next-gen wireless controller with haptic feedback and adaptive triggers",
	},
	{
		id: "2",
		name: "VR Headset Pro",
		price: 599.99,
		image: "https://images.pexels.com/photos/7241389/pexels-photo-7241389.jpeg?auto=compress&cs=tinysrgb&w=800",
		description:
			"4K resolution VR experience with 120Hz refresh rate and eye tracking",
	},
	{
		id: "3",
		name: "Gaming Keyboard Elite",
		price: 199.99,
		image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800",
		description:
			"Mechanical switches with customizable RGB lighting and programmable keys",
	},
	{
		id: "4",
		name: "Pro Gaming Mouse",
		price: 89.99,
		image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800",
		description: "Ultra-precise 20,000 DPI sensor with ergonomic design",
	},
	{
		id: "5",
		name: "Gaming Headset Ultra",
		price: 179.99,
		image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800",
		description:
			"7.1 surround sound with noise cancellation and premium comfort",
	},
	{
		id: "6",
		name: "Pro Gaming Chair",
		price: 449.99,
		image: "https://images.pexels.com/photos/6266304/pexels-photo-6266304.jpeg?auto=compress&cs=tinysrgb&w=800",
		description:
			"Ergonomic design with lumbar support and adjustable armrests",
	},
	{
		id: "7",
		name: "Gaming Monitor 4K",
		price: 799.99,
		image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=800",
		description:
			"27-inch 4K display with 144Hz refresh rate and HDR support",
	},
	{
		id: "8",
		name: "Mechanical Numpad",
		price: 59.99,
		image: "https://images.unsplash.com/photo-1656711111035-e9a5d6fb3c29?auto=compress&cs=tinysrgb&w=800",
		description:
			"Programmable mechanical numpad with hot-swappable switches",
	},
	{
		id: "9",
		name: "Gaming Mouse Pad XXL",
		price: 39.99,
		image: "https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=800",
		description: "Extended gaming surface with anti-slip rubber base",
	},
	{
		id: "10",
		name: "Cable Management Kit",
		price: 24.99,
		image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
		description:
			"Complete cable organization solution for clean gaming setup",
	},
	{
		id: "11",
		name: "Webcam Pro 4K",
		price: 149.99,
		image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
		description:
			"4K streaming camera with auto-focus and low-light correction",
	},
	{
		id: "12",
		name: "Stream Deck",
		price: 129.99,
		image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800",
		description: "Customizable control panel with LCD keys for streaming",
	},
];

export default function Shop() {
	const { addToCart } = useCart();
	const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

	const handleAddToCart = (product: Product) => {
		addToCart(product);
		setAddedItems((prev) => new Set(prev).add(product.id));
		setTimeout(() => {
			setAddedItems((prev) => {
				const newSet = new Set(prev);
				newSet.delete(product.id);
				return newSet;
			});
		}, 2000);
	};

	return (
		<div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="mb-12">
					<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
						Shop All Products
					</h1>
					<p className="text-xl text-gray-600">
						Browse our complete collection of premium gaming
						hardware
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{allProducts.map((product) => (
						<div
							key={product.id}
							className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
						>
							<div className="relative overflow-hidden aspect-square">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									{product.name}
								</h3>
								<p className="text-gray-600 text-sm mb-4 line-clamp-2">
									{product.description}
								</p>
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl font-bold text-gray-900">
										${product.price.toFixed(2)}
									</span>
								</div>
								<button
									onClick={() => handleAddToCart(product)}
									className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
										addedItems.has(product.id)
											? "bg-green-600 text-white"
											: "bg-gray-900 text-white hover:bg-gray-800"
									}`}
									disabled={addedItems.has(product.id)}
								>
									<ShoppingCart size={18} />
									{addedItems.has(product.id)
										? "Added to Cart!"
										: "Add to Cart"}
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
