import { Link } from "react-router-dom";
import style from "./SavedRecipeTile.module.scss";
import { RecipeProps } from "../../pages/Home";
import CustomImage from "../CustomImage/CustomImage";

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
        <CustomImage src={recipe.imageUrl} alt={recipe.name} />
      </Link>
    </li>
  );
};

export default SavedRecipeTile;
