import { Link } from "react-router-dom";
import { RecipeProps } from "../../pages/Home";
import style from "./SavedRecipeTile.module.scss";

const SavedRecipeTile = ({ recipe }: { recipe: RecipeProps }) => {
  return (
    <li>
      <Link to={`/${recipe._id}`} className={style.tile}>
        <div>
          <span>
            <h2>{recipe.name.toUpperCase()}</h2>
            <p>{recipe.description}</p>
          </span>
          <p>Cooking Time: {recipe.cookingTime} minutes</p>
        </div>
        <img src={recipe.imageUrl} alt={recipe.name} />
      </Link>
    </li>
  );
};

export default SavedRecipeTile;
