import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import SaveRecipeButton from "../SaveRecipeButton/SaveRecipeButton";
import style from "./SingleRecipeTile.module.scss";
import CustomImage from "../CustomImage/CustomImage";
import { RecipeProps } from "../../types/Recipe";
import { ClipLoader } from "react-spinners";

const SingleRecipeTile = () => {
  const [recipe, setRecipe] = useState<RecipeProps>();
  const [isError, setIsError] = useState("");
  const params = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/single-recipe/${params.recipeID}`
        );
        setRecipe(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setIsError(error.message);
          console.log(error);
        }
      }
    };
    fetchRecipe();
  }, []);

  useEffect(() => {
    document.title = `MyRecipe - ${recipe?.name ? recipe?.name : "Not Found"}`;
  }, [recipe?.name]);

  return (
    <>
      {recipe ? (
        <section className={style.section}>
          <div className={style.topContainer}>
            <h2>{recipe?.name}</h2>
            <h4>Cooking Time: {recipe.cookingTime} minutes</h4>
            <span>
              <SaveRecipeButton
                black
                recipeId={recipe._id}
                likesCounter
                initailCounter={recipe.likesCounter}
              />
            </span>
          </div>
          <hr />
          <p>{recipe.description}</p>
          <CustomImage src={recipe.imageUrl} alt={recipe.name} />
          <h3>Ingredients</h3>
          <ul>
            {recipe?.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <h3>Directions</h3>
          <ol>
            {recipe?.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ol>
          <hr />
          <button onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </button>
        </section>
      ) : isError ? (
        <h2>{isError}</h2>
      ) : (
        <ClipLoader color="orange" />
      )}
    </>
  );
};

export default SingleRecipeTile;
