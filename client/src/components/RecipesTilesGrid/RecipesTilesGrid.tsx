import axios from "axios";
import { useState, useEffect } from "react";
import { RecipeProps } from "../../pages/home";
import RecipeTile from "../RecipeTile/RecipeTile";
import style from "./RecipesTilesGrid.module.scss";

const RecipesTilesGrid = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data.recipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <ul className={style.container}>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <RecipeTile recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default RecipesTilesGrid;
