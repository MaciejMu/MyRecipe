import { useEffect } from "react";
import Container from "../components/Container/Container";
import RecipesTilesGrid from "../components/RecipesTilesGrid/RecipesTilesGrid";
import Banner from "../components/Banner/Banner";

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
      <Banner
        img={
          "https://www.allrecipes.com/thmb/-b2s0KBpacuaiuaCjsZsdSv3Kug=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-21694-marinated-grilled-shrimp-ddmfs-4x3-0203-2000-a11ef792608c40c89c7318e322993f85.jpg"
        }
        title={"Quick & Fast"}
        description={
          "Need dinner quick? Find fast and easy pastas, chicken dishes, stir fry, and more."
        }
        linkTo={"/Quick-&-Fast"}
      />
      <Container>
        <h1>Recipes</h1>
        <RecipesTilesGrid />
      </Container>
    </>
  );
};

export default Home;
