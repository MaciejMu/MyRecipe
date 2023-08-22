import { Link } from "react-router-dom";
import style from "./CategoryFilter.module.scss";

const CategoryFilter = () => {
  return (
    <section className={style.container}>
      <Link to={"/?category=Breakfast-and-Brunch"}>Breakfast-and-Brunch</Link>
      <Link to={"/"}>Lunch</Link>
      <Link to={"/"}>Healty</Link>
      <Link to={"/"}>Appetizers-and-Snacks</Link>
      <Link to={"/"}>Salad</Link>
      <Link to={"/"}>Side-Dishes</Link>
      <Link to={"/"}>Soup</Link>
      <Link to={"/"}>Bread</Link>
      <Link to={"/"}>Drinks</Link>
      <Link to={"/"}>Desserts</Link>
    </section>
  );
};

export default CategoryFilter;
