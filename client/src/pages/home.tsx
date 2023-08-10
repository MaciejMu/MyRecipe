import axios from "axios";
import { useState, useEffect } from "react";
import getUserID from "../hooks/getUserId";
import { useCookies } from "react-cookie";

type Recipe = {
  _id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  cookingTime: number;
  creator: string;
};

const Home = () => {
  const userID = getUserID();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _] = useCookies();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [savedRecipes, setSavedRepices] = useState<string[]>([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/saved-recipes/ids/${userID}`
        );
        setSavedRepices(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
    if (cookies.access_token) fetchSavedRecipe();
  }, []);

  const isRecipeSaved = (id: string) => savedRecipes.includes(id);

  const saveRecipe = async (recipeID: string) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/recipes",
        {
          recipeID,
          userID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      setSavedRepices(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              {cookies.access_token ? (
                <button
                  onClick={() => saveRecipe(recipe._id)}
                  disabled={isRecipeSaved(recipe._id)}
                >
                  {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
                </button>
              ) : null}
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
