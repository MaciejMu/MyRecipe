// import axios from "axios";
// import { useEffect } from "react";
// import { RecipeProps } from "./Home";

import axios from "axios";
import { useState, useEffect } from "react";
import { RecipeProps } from "./Home";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    const featchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/recipes/Quick-&-Fast"
        );
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    featchRecipes();
  }, []);

  console.log(recipes);

  return (
    <>
      {recipes.map((recipe, i) => (
        <p key={i}>{recipe.cookingTime}</p>
      ))}
    </>
  );
};

export default FeaturedRecipes;
