import { useShoppingCartStore } from "shoppingCart/store";

interface ProductProps {
  id: number;
  name: string;
}

function Product({ id, name }: ProductProps) {
  const addToShoppingCart = useShoppingCartStore(
    (state) => state.addToShoppingCart
  );

  function handleAddToCart() {
    addToShoppingCart({ id, name });
  }

  return (
    <div className="flex h-96 bg-gray-200 items-end justify-center p-2">
      <button
        className="flex h-fit px-4 py-2 bg-blue-300 hover:bg-blue-400 transition-all"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}

export { Product };
