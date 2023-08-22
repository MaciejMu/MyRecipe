import { faClock } from "@fortawesome/free-regular-svg-icons";
import SaveRecipeButton from "../SaveRecipeButton/SaveRecipeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./RecipeTile.module.scss";
import { Link } from "react-router-dom";
import { RecipeProps } from "../../pages/home";
import { useState } from "react";

const RecipeTile = ({ recipe }: { recipe: RecipeProps }) => {
  const [img, setImg] = useState(recipe.imageUrl);
  return (
    <Link to={`/${recipe._id}`}>
      <div className={style.tile}>
        <div className={style.nameContainer}>
          <h2>{recipe.name.toUpperCase()}</h2>
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
      </div>
    </Link>
  );
};

export default RecipeTile;
