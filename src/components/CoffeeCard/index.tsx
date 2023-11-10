import { ShoppingCart } from "phosphor-react";
import { useRef } from "react";
import { useTheme } from "styled-components";
import { useCartContext } from "../../contexts/CartContext";
import { CoffeeQuantity, CoffeeQuantityRef } from "../CoffeeQuantity";
import {
  AddToCartButton,
  CoffeeCardContainer,
  Description,
  Footer,
  Image,
  Price,
  Tag,
  Tags,
  Title,
} from "./styles";
import { CoffeeType } from "../../pages/Home";

interface CoffeeCardProps {
  coffee: CoffeeType;
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const theme = useTheme();
  const { addItemToCart } = useCartContext();
  const coffeeQuantityRef = useRef<CoffeeQuantityRef>(null);

  function handleAddToCart() {
    addItemToCart(coffeeQuantityRef.current?.quantity ?? 1, coffee.id);
  }

  return (
    <CoffeeCardContainer>
      <Image src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.categories.map(category => (
          <Tag key={category}>{category}</Tag>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Footer>
        <Price>
          <small>R$</small>

          <span>
            {coffee.price.toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </span>
        </Price>

        <CoffeeQuantity ref={coffeeQuantityRef} />

        <AddToCartButton type="button" onClick={handleAddToCart}>
          <ShoppingCart
            size={22}
            color={theme.colors.base.card}
            weight="fill"
          />
        </AddToCartButton>
      </Footer>
    </CoffeeCardContainer>
  );
};
