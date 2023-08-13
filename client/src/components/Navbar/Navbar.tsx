import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import style from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUser,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/login");
  };

  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <Link to={"/"}>
          <h1>
            <FontAwesomeIcon icon={faWineBottle} />
            myrecipes
          </h1>
        </Link>
        {!cookies.access_token ? (
          <Link to={"/login"}>
            <FontAwesomeIcon icon={faRightToBracket} className={style.icon} />
          </Link>
        ) : (
          <div className={style.userNavigate}>
            <FontAwesomeIcon icon={faUser} className={style.icon} />
            <div className={style.dropdown}>
              <Link to={"/create-recipe"}>Create Recipe</Link>
              <Link to={"/saved-recipes"}>Saved Recipe</Link>
              <Link to={"/login"} onClick={logout}>
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
