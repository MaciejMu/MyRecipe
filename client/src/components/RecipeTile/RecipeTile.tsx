import { faClock } from "@fortawesome/free-regular-svg-icons";
import SaveRecipeButton from "../SaveRecipeButton/SaveRecipeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./RecipeTile.module.scss";
import { Link } from "react-router-dom";
import { RecipeProps } from "../../pages/home";

const RecipeTile = ({ recipe }: { recipe: RecipeProps }) => {
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
          src={recipe.imageUrl}
          alt={recipe.name}
          className={style.recipeImage}
        />
      </div>
    </Link>
  );
};

export default RecipeTile;
