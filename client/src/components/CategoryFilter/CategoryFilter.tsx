import { Link, useSearchParams } from "react-router-dom";
import style from "./CategoryFilter.module.scss";
import clsx from "clsx";

const cartegories = [
  "Breakfast-and-Brunch",
  "Lunch",
  "Main-Dishes",
  "Healty",
  "Appetizers-and-Snacks",
  "Salad",
  "Side-Dishes",
  "Soup",
  "Bread",
  "Drinks",
  "Desserts",
];

const CategoryFilter = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  const createLink = (category: string) => {
    return (
      <Link
        to={`/?page=1&limit=8&category=${category}`}
        className={clsx(category === currentCategory && style.current)}
      >
        {category.split("-").join(" ")}
      </Link>
    );
  };

  return (
    <ul className={style.section}>
      <li>
        <Link
          to={`/?page=1&limit=8`}
          className={clsx(!currentCategory && style.current)}
        >
          All
        </Link>
      </li>
      {cartegories.map((category, i) => (
        <li key={i}>{createLink(category)}</li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
