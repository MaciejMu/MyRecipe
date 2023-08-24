import { Link } from "react-router-dom";
import { RecipeProps } from "../../pages/Home";
import style from "./QuickRecipeTile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import clsx from "clsx";

const QuickRecipeTile = ({ recipe }: { recipe: RecipeProps }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className={style.section}>
      <hr />
      <div>
        <p>{recipe.cookingTime}"</p>
        <img src={recipe.imageUrl} />
        <span>
          <h4>{recipe.name}</h4>
        </span>
        {isActive ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            className={style.arrow}
            onClick={() => setIsActive(false)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={style.arrow}
            onClick={() => setIsActive(true)}
          />
        )}
      </div>
      <ul className={clsx(style.ingredientsList, isActive && style.active)}>
        {recipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <Link to={`/${recipe._id}`}>
        <b>
          Go to recipe <FontAwesomeIcon icon={faArrowRight} />
        </b>
      </Link>
    </section>
  );
};

export default QuickRecipeTile;
