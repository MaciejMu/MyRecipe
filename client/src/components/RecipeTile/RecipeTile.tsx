import { faClock } from "@fortawesome/free-regular-svg-icons";
import SaveRecipeButton from "../SaveRecipeButton/SaveRecipeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./RecipeTile.module.scss";
import CustomImage from "../CustomImage/CustomImage";
import { RecipeProps } from "../../types/Recipe";

const RecipeTile = ({ recipe }: { recipe: RecipeProps }) => {
  const [isHover, setIsHover] = useState(false);

  const recipeName = (recipeName: string) => {
    if (recipeName.length > 20 && !isHover) {
      return recipeName.slice(0, 22).toUpperCase() + "...";
    } else return recipeName.toUpperCase();
  };

  return (
    <Link
      to={`/${recipe._id}`}
      className={style.tile}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
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
      <CustomImage
        src={recipe.imageUrl}
        alt={recipe.name}
        className={style.recipeImage}
      />
    </Link>
  );
};

export default RecipeTile;
