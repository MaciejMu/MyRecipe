import axios from "axios";
import { useState, useEffect } from "react";
import { RecipeProps } from "../../pages/home";
import RecipeTile from "../RecipeTile/RecipeTile";
import style from "./RecipesTilesGrid.module.scss";
import Pagination from "../Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

const RecipesTilesGrid = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [numOfRecipes, setNumOfRecipes] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes", {
          params: {
            category: searchParams.get("category"),
            page: searchParams.get("page"),
            limit: searchParams.get("limit"),
          },
        });
        setRecipes(response.data.recipes);
        setNumOfRecipes(response.data.numOfRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <>
      <ul className={style.container}>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeTile recipe={recipe} />
          </li>
        ))}
      </ul>
      <Pagination numOfRecipes={numOfRecipes} />
    </>
  );
};

export default RecipesTilesGrid;
