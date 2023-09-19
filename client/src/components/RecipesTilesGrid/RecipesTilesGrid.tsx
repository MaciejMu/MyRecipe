import axios from "axios";
import { useState, useEffect } from "react";
import RecipeTile from "../RecipeTile/RecipeTile";
import { useSearchParams } from "react-router-dom";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import { RecipeProps } from "../../types/Recipe";
import style from "./RecipesTilesGrid.module.scss";

const RecipesTilesGrid = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [numOfRecipes, setNumOfRecipes] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/`, {
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
  }, [searchParams]);

  return (
    <>
      <CategoryFilter />
      <ul data-aos="fade-up" className={style.container}>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeTile recipe={recipe} />
          </li>
        ))}
      </ul>
      <PaginationContainer numOfRecipes={numOfRecipes} />
    </>
  );
};

export default RecipesTilesGrid;
