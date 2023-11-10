import { CoffeeCard } from "../../components/CoffeeCard";
import { coffeeCollection } from "../../data/coffees";
import { HomeHero } from "./HomeHero";
import {
  CoffeeCards,
  HomeContainer,
  HomeInsideContainer,
  HomeTitle,
} from "./styles";

export type CoffeeType = {
  id: number;
  categories: string[];
  title: string;
  description: string;
  price: number;
  image: string;
}

export const Home = () => (
  <HomeContainer>
    <HomeInsideContainer>
      <HomeHero />
      <HomeTitle>Nossos cafés</HomeTitle>

      <CoffeeCards>
        {coffeeCollection.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeCards>
    </HomeInsideContainer>
  </HomeContainer>
);
