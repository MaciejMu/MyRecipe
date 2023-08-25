import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import style from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUser,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import UserName from "../Username/Username";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/login");
  };

  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <Link to={"/"}>
          <h1>
            <FontAwesomeIcon icon={faWineBottle} />
            myrecipes
          </h1>
        </Link>
        {!cookies.access_token ? (
          <Link to={"/login"}>
            <span>
              <b>Login</b>
              <FontAwesomeIcon icon={faRightToBracket} className={style.icon} />
            </span>
          </Link>
        ) : (
          <nav className={style.userNavigate}>
            <span>
              <b>
                <UserName />
              </b>
              <FontAwesomeIcon icon={faUser} className={style.icon} />
            </span>
            <div className={style.dropdown}>
              <Link to={"/create-recipe"}>Create Recipe</Link>
              <Link to={"/saved-recipes"}>Saved Recipe</Link>
              <Link to={"/login"} onClick={logout}>
                Logout
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
