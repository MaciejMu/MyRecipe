import axios from "axios";
import { useState, useEffect } from "react";
import RecipeTile from "../components/RecipeTile/RecipeTile";
import Container from "../components/Container/Container";

type RecipeProps = {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  cookingTime: number;
  creator: string;
};

const Home = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

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
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeTile recipe={recipe} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;
