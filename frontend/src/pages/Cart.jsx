import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="border p-2 mb-2">
          {item.name} - ${item.price}
        </div>
      ))}
      <p>Total Items: {cart.length}</p>
    </div>
  );
}