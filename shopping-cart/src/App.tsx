import { CartItemProps, useShoppingCartStore } from "./stores/shopping-cart";

function App() {
  const products = useShoppingCartStore((state) => state.products);

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold mb-8">Shopping Cart</h1>
      <div className="flex w-2/5 bg-gray-300 py-2 px-4 font-bold">
        <span className="flex flex-1">Product</span>
        <span className="flex flex-1">Qty</span>
      </div>
      {products.map((p: CartItemProps) => (
        <div
          key={p.id}
          className="flex w-2/5 bg-gray-100 p-4"
        >
          <span className="flex flex-1">{p.name}</span>
          <span className="flex flex-1">{p.qty}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
