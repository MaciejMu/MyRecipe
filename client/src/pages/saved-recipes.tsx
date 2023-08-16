import axios from "axios";
import { useState, useEffect } from "react";
import getUserID from "../hooks/getUserId";
import Container from "../components/Container/Container";
import SavedRecipeTile from "../components/SavedRecipeTile/SavedRecipeTile";
import { RecipeProps } from "./Home";

const SavedRecipes = () => {
  const userID = getUserID();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [savedRecipes, setSavedRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    document.title = "MyRecipe - Saved Recipes";
  }, []);

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/saved-recipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSavedRecipe();
  }, []);

  return (
    <Container>
      <h1>Saved Recipes</h1>
      {savedRecipes.length > 0 ? (
        <ul>
          {savedRecipes.map((recipe) => (
            <SavedRecipeTile recipe={recipe} key={recipe._id} />
          ))}
        </ul>
      ) : (
        <h2>You have not saved recipes yet</h2>
      )}
    </Container>
  );
};

export default SavedRecipes;
