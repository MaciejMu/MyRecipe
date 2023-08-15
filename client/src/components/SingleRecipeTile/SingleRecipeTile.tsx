import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeProps } from "../../pages/Home";
import Container from "../Container/Container";
import style from "./SingleRecipeTile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import SaveRecipeButton from "../SaveRecipeButton/SaveRecipeButton";

const SingleRecipeTile = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState<RecipeProps>();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/${params.recipeID}`
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
    <Container>
      {recipe ? (
        <section className={style.section}>
          <div className={style.topContainer}>
            <h2>{recipe?.name}</h2>
            <h4>Cooking Time: {recipe.cookingTime} minutes</h4>
            <span>
              <SaveRecipeButton
                recipeId={recipe._id}
                numberOfLikes={recipe.likesCounter}
              />
              <p>{recipe?.likesCounter}</p>
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
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default SingleRecipeTile;