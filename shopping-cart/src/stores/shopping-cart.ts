import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ProductProps {
  id: number;
  name: string;
}

export interface CartItemProps extends ProductProps {
  qty: number;
}

export interface CartStoreProps {
  products: CartItemProps[];
  addToShoppingCart: (product: ProductProps) => void;
}

const useShoppingCartStore = create<CartStoreProps>()(
  persist(
    (set, get) => ({
      products: [],
      addToShoppingCart: (product: CartItemProps) => {
        const existingProduct = get().products.some((p) => p.id === product.id);
        set({
          products: existingProduct
            ? get().products.map((p) => {
                return p.id === product.id
                  ? {
                      ...p,
                      qty: p.qty + 1,
                    }
                  : {
                      ...p,
                    };
              })
            : [...get().products, { ...product, qty: 1 }],
        });
      },
    }),
    {
      name: "shopping-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useShoppingCartStore };
