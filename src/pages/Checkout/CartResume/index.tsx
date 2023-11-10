import { Fragment, useMemo } from "react";
import { Button } from "../../../components/Button";
import { CartItem } from "../../../components/CartItem";
import { useCartContext } from "../../../contexts/CartContext";
import { formatPrice } from "../../../utils/formatPrice";
import {
  BackLink,
  Cart,
  CartItems,
  CartItemSeparator,
  CartSideContainer,
  NoItemsInCart,
  Summary,
  SummaryLine,
} from "./styles";

const deliveryPrice = 3.5;

export const CartResume = () => {
  const { items } = useCartContext();

  const itemsTotal = useMemo((): number => {
    return items.reduce(
      (total, item) => total + item.coffee.price * item.quantity,
      0,
    );
  }, [items]);

  return (
    <CartSideContainer>
      <h2>Cafés selecionados</h2>

      <Cart>
        {items.length > 0 ? (
          <Fragment>
            <CartItems>
              {items.map(item => (
                <Fragment key={item.coffee.id}>
                  <CartItem quantity={item.quantity} coffee={item.coffee} />
                  <CartItemSeparator />
                </Fragment>
              ))}
            </CartItems>

            <Summary>
              <SummaryLine>
                <span>Total de itens</span>
                <span>{formatPrice(itemsTotal)}</span>
              </SummaryLine>

              <SummaryLine>
                <span>Entrega</span>
                <span>{formatPrice(deliveryPrice)}</span>
              </SummaryLine>

              <SummaryLine highlight>
                <span>Total</span>
                <span>{formatPrice(itemsTotal + deliveryPrice)}</span>
              </SummaryLine>
            </Summary>

            <Button type="submit" title="CONFIRMAR PEDIDO" />
          </Fragment>
        ) : (
          <NoItemsInCart>
            Ih, sem ☕, isso não é legal
            <br />
            <br />
            <BackLink to="/">Quero garantir meu café!</BackLink>
          </NoItemsInCart>
        )}
      </Cart>
    </CartSideContainer>
  );
};
