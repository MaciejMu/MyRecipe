import axios from "axios";
import { useState, useEffect } from "react";
import getUserID from "../hooks/getUserId";
import Container from "../components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

type Recipe = {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  cookingTime: number;
  creator: string;
};

const SavedRecipes = () => {
  const userID = getUserID();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

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
      <ul>
        {savedRecipes ? (
          savedRecipes.map((recipe) => (
            <li key={recipe._id}>
              <div className="recipeTextContainer">
                <div className="recipeHeader">
                  <h2>{recipe.name}</h2>
                </div>
                <div>
                  <p>{recipe.description}</p>
                </div>
                <p>Cooking Time: {recipe.cookingTime} minutes</p>
              </div>

              <img src={recipe.imageUrl} alt={recipe.name} />

              <FontAwesomeIcon icon={faXTwitter} className="delete" />
            </li>
          ))
        ) : (
          <div>You have not saved recipes yet</div>
        )}
      </ul>
    </Container>
  );
};

export default SavedRecipes;
