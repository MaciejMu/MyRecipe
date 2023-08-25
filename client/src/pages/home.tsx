import { useEffect } from "react";
import Container from "../components/Container/Container";
import RecipesTilesGrid from "../components/RecipesTilesGrid/RecipesTilesGrid";
import NewsletterBanner from "../components/NewsletterBanner/NewsletterBanner";

<NewsletterBanner />;
export type RecipeProps = {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  cookingTime: number;
  creator: string;
  likesCounter: number;
  category: string;
};

const Home = () => {
  useEffect(() => {
    document.title = "MyRecipe";
  }, []);

  return (
    <>
      <Container>
        <h1>Recipes</h1>
        <RecipesTilesGrid />
      </Container>
      <NewsletterBanner />
    </>
  );
};

export default Home;
