import axios from "axios";
import { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import RecipesTilesGrid from "../components/RecipesTilesGrid/RecipesTilesGrid";

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
};

const Home = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    document.title = "MyRecipe";
  }, []);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <Container>
      <h1>All Recipes</h1>
      <RecipesTilesGrid recipes={recipes} />
    </Container>
  );
};

export default Home;
