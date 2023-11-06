import { NavbarContainer } from "./style"

import CoffeDeliveryLogoImage from '../../assets/images/coffee-delivery-logo.svg'
import { Button } from ".."
import { MapPin, ShoppingCart } from "@phosphor-icons/react"

export const Navbar = () => {
  return <NavbarContainer>
    <div>
      <a href={"/"}>
        <img src={CoffeDeliveryLogoImage} alt="GR - Coffee Delivery" />
      </a>
    </div>

    <div>
      <Button size={'sm'} color={'purple-light'}>
        <MapPin size={18} weight="fill" />
        SORRISO, MT
      </Button>

      <Button size={'sm'} color={'primary-light'} style={{ marginLeft: 8 }}>
        <ShoppingCart size={18} weight="fill" />
        <span className="cart-item-count">0</span>
      </Button>
    </div>
  </NavbarContainer>
}