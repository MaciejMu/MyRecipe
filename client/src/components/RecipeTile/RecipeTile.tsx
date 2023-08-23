import { faClock } from "@fortawesome/free-regular-svg-icons";
import SaveRecipeButton from "../SaveRecipeButton/SaveRecipeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RecipeProps } from "../../pages/Home";
import style from "./RecipeTile.module.scss";

const RecipeTile = ({ recipe }: { recipe: RecipeProps }) => {
  const [img, setImg] = useState(recipe.imageUrl);

  const recipeName = (recipeName: string) => {
    if (recipeName.length > 20) {
      return recipeName.slice(0, 22).toUpperCase() + "...";
    } else return recipeName.toUpperCase();
  };

  return (
    <Link to={`/${recipe._id}`} className={style.tile}>
      <>
        <div className={style.nameContainer}>
          <h2>{recipeName(recipe.name)}</h2>
        </div>
        <div className={style.topContianer}>
          <SaveRecipeButton recipeId={recipe._id} />
          <b>
            <FontAwesomeIcon icon={faClock} className={style.clockIcon} />
            {recipe.cookingTime}min
          </b>
        </div>
        <img
          src={img}
          alt={recipe.name}
          onError={() => setImg("https://placehold.co/300x200")}
          className={style.recipeImage}
        />
      </>
    </Link>
  );
};

export default RecipeTile;
