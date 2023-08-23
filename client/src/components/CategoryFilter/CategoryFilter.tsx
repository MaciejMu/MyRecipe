import { Link } from "react-router-dom";
import style from "./CategoryFilter.module.scss";

const CategoryFilter = () => {
  const createLink = (category: string) => {
    return `/?page=1&limit=8&category=${category}`;
  };

  return (
    <section className={style.container}>
      <Link to={"/?page=1&limit=8"}>All</Link>
      <Link to={createLink("Breakfast-and-Brunch")}>Breakfast and Brunch</Link>
      <Link to={createLink("Lunch")}>Lunch</Link>
      <Link to={createLink("Healty")}>Healty</Link>
      <Link to={createLink("Appetizers-and-Snacks")}>
        Appetizers and Snacks
      </Link>
      <Link to={createLink("Salad")}>Salad</Link>
      <Link to={createLink("Side-Dishes")}>Side Dishes</Link>
      <Link to={createLink("Soup")}>Soup</Link>
      <Link to={createLink("Bread")}>Bread</Link>
      <Link to={createLink("Drinks")}>Drinks</Link>
      <Link to={createLink("Desserts")}>Desserts</Link>
    </section>
  );
};

export default CategoryFilter;
