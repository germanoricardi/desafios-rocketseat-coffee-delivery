import { createContext, useCallback, useContext, useMemo } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { CoffeeType } from "../pages/Home";
import { coffeeCollection } from "../data/coffees";

interface CartItem {
  quantity: number;
  coffeeId: CoffeeType["id"];
}

interface FullCartItem {
  quantity: number;
  coffee: CoffeeType;
}

interface CartContextData {
  items: FullCartItem[];
  addItemToCart: (quantity: number, coffeeId: CoffeeType["id"]) => void;
  removeItemFromCart: (coffeeId: CoffeeType["id"]) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextData);

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContextProvider = ({
  children,
}: CartContextProviderProps) => {
  const [items, setItems] = useLocalStorageState<CartItem[]>(
    "@gr-coffee-delivery:cart-1.0.0",
    [],
  );

  const addItemToCart: CartContextData["addItemToCart"] = useCallback(
    (quantity, coffeeId) => {
      if (coffeeCollection.findIndex(coffee => coffee.id === coffeeId) < 0) {
        throw new Error("Produto não localizado");
      }

      setItems(items => {
        const copy = [...items];

        const existingItemIndex = copy.findIndex(
          item => item.coffeeId === coffeeId,
        );

        if (existingItemIndex >= 0) {
          // altera a quantidade se produto estiver no carrinho
          copy[existingItemIndex].quantity = quantity;
        } else {
          // adiciona novo item ao carrinho
          copy.push({
            quantity,
            coffeeId,
          });
        }

        return copy;
      });
    },
    [],
  );

  const removeItemFromCart: CartContextData["removeItemFromCart"] = useCallback(
    coffeeId => {
      setItems(items => {
        return items.filter(item => item.coffeeId !== coffeeId);
      });
    },
    [],
  );

  const clearCart: CartContextData["clearCart"] = useCallback(() => {
    setItems([]);
  }, []);

  const fullItems = useMemo((): FullCartItem[] => {
    return (
      items
        // elimina ids inexistentes
        .filter(item => coffeeCollection.some(coffee => coffee.id === item.coffeeId))
        .map(item => ({
          quantity: item.quantity,
          coffee: coffeeCollection.find(coffee => coffee.id === item.coffeeId)!,
        }))
    );
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items: fullItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
