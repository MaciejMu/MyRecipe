import { RecipeProps } from "../../pages/Home";
import RecipeTile from "../RecipeTile/RecipeTile";
import style from "./RecipesTilesGrid.module.scss";

const RecipesTilesGrid = ({ recipes }: { recipes: RecipeProps[] }) => {
  return (
    <ul className={style.container}>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <RecipeTile recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default RecipesTilesGrid;
