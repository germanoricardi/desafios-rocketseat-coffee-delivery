import { Trash } from "phosphor-react";
import { useCartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { CoffeeQuantity } from "../CoffeeQuantity";
import { IconButton } from "../IconButton";
import { CartItemContainer, Content, Image, Price } from "./styles";
import { CoffeeType } from "../../pages/Home";

interface CartItemProps {
  quantity: number;
  coffee: CoffeeType;
}

export const CartItem = ({ quantity, coffee }: CartItemProps) => {
  const { addItemToCart, removeItemFromCart } = useCartContext();

  function handleIncrement(quantity: number) {
    addItemToCart(quantity, coffee.id);
  }

  function handleDecrement(quantity: number) {
    addItemToCart(quantity, coffee.id);
  }

  function handleDeleteItem() {
    removeItemFromCart(coffee.id);
  }

  return (
    <CartItemContainer>
      <Image src={coffee.image} alt={coffee.title} />

      <Content>
        <strong>{coffee.title}</strong>

        <div>
          <CoffeeQuantity
            initialQuantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />

          <IconButton
            type="button"
            icon={Trash}
            title="REMOVER"
            size="small"
            onClick={handleDeleteItem}
          />
        </div>
      </Content>

      <Price>{formatPrice(coffee.price * quantity)}</Price>
    </CartItemContainer>
  );
};
