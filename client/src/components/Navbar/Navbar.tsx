import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.dupa}>
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/saved-recipies"}>Save Recipe</Link>
      <Link to={"/auth"}>Login/Register</Link>
    </div>
  );
};

export default Navbar;
