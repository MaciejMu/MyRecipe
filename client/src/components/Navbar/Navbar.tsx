import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };
  return (
    <div className={style.dupa}>
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/saved-recipies"}>Save Recipe</Link>
      {!cookies.access_token ? (
        <Link to={"/auth"}>Login/Register</Link>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Navbar;
