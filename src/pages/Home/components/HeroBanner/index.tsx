import { HeroBannerContainer, HeroItem, HeroItemsContainer } from "./style"

import HeroImage from '../../../../assets/images/banner.png'
import { Text, Title } from "../../../../components"
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"

const HeroBanner = () => {
  return <>
  <HeroBannerContainer>
    <div>
      <Title size={'xl'}>Encontre o café perfeito para qualquer hora do dia</Title>
      <Text size={'lg'}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Text>

      <HeroItemsContainer>

        <HeroItem><ShoppingCart weight="fill" size={32} /> Compra simples e segura</HeroItem>
        <HeroItem><Package weight="fill" size={32} /> Embalagem mantém o café intacto</HeroItem>
        <HeroItem><Timer weight="fill" size={32} /> Entrega rápida e rastreada</HeroItem>
        <HeroItem><Coffee weight="fill" size={32} /> O café chega fresquinho até você</HeroItem>
        
      </HeroItemsContainer>

    </div>

    <img src={HeroImage} alt="Encontre o café perfeito para qualquer hora do dia" height={'100%'} />
  </HeroBannerContainer>
  </>
}

export default HeroBanner