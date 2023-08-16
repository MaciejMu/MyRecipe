import { faClock } from "@fortawesome/free-regular-svg-icons";
import SaveRecipeButton from "../SaveRecipeButton/SaveRecipeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./RecipeTile.module.scss";
import { RecipeProps } from "../../pages/Home";

const RecipeTile = ({ recipe }: { recipe: RecipeProps }) => {
  return (
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
  );
};

export default RecipeTile;
