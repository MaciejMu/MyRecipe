import { RecipeProps } from "../../pages/Home";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import style from "./SavedRecipeTile.module.scss";

const SavedRecipeTile = ({ recipe }: { recipe: RecipeProps }) => {
  return (
    <>
      <li key={recipe._id} className={style.tile}>
        <div>
          <span>
            <h2>{recipe.name.toUpperCase()}</h2>
            <p>{recipe.description}</p>
          </span>
          <p>Cooking Time: {recipe.cookingTime} minutes</p>
        </div>
        <img src={recipe.imageUrl} alt={recipe.name} />
        {/* <FontAwesomeIcon icon={faXTwitter} className="delete" /> */}
      </li>
    </>
  );
};

export default SavedRecipeTile;
