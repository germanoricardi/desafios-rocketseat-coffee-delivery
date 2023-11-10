import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import logo from "../../assets/logo.svg";
import { useCartContext } from "../../contexts/CartContext";
import {
  CheckoutLink,
  HeaderContainer,
  InsideHeaderContainer,
  Location,
} from "./styles";

export const Header = () => {
  const theme = useTheme();
  const { items } = useCartContext();

  return (
    <HeaderContainer>
      <InsideHeaderContainer>
        <Link to="/">
          <img src={logo} alt="GR - Coffee Delivery" />
        </Link>

        <div>
          <Location>
            <MapPin
              size={22}
              color={theme.colors.purple.DEFAULT}
              weight="fill"
            />
            SORRISO, MT
          </Location>

          <CheckoutLink
            to="/checkout"
            data-cart-items={items.length || undefined}
          >
            <ShoppingCart size={22} weight="fill" />
          </CheckoutLink>
        </div>
      </InsideHeaderContainer>
    </HeaderContainer>
  );
};
