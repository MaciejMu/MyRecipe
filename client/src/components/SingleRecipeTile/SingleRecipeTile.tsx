import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import SaveRecipeButton from "../SaveRecipeButton/SaveRecipeButton";
import { RecipeProps } from "../../pages/Home";
import style from "./SingleRecipeTile.module.scss";

const SingleRecipeTile = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState<RecipeProps>();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/single-recipe/${params.recipeID}`
        );
        setRecipe(response.data);
      } catch (err) {
        console.log(err);
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
          <p>{recipe.description}</p>
          <img src={recipe.imageUrl} alt={recipe.name} />
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <h3>Directions</h3>
          <ol>
            {recipe.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ol>
          <button onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </button>
        </section>
      ) : (
        <h2>Something went wong...</h2>
      )}
    </>
  );
};

export default SingleRecipeTile;
