import axios from "axios";
import { useState, useEffect } from "react";
import getUserID from "../hooks/getUserId";
import Container from "../components/Container/Container";
import SavedRecipeTile from "../components/SavedRecipeTile/SavedRecipeTile";
import { RecipeProps } from "../types/Recipe";
import { ClipLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";

const SavedRecipes = () => {
  const userID = getUserID();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [savedRecipes, setSavedRecipes] = useState<RecipeProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "MyRecipe - Saved Recipes";
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: false,
    });
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
      setIsLoading(false);
    };
    fetchSavedRecipe();
  }, []);

  return (
    <Container>
      <h1>Saved Recipes</h1>
      {isLoading ? (
        <ClipLoader color="orange" />
      ) : savedRecipes.length > 0 ? (
        <ul data-aos="fade-up">
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
