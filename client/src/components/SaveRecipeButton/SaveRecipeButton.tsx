import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as saved } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unsaved } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import getUserId from "../../hooks/getUserId";
import style from "./SaveRecipeButton.module.scss";

const SaveRecipeButton = ({ recipeId }: { recipeId: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _] = useCookies();
  const [isHover, setIsHover] = useState(false);
  const [savedRecipes, setSavedRepices] = useState<string[]>([]);
  const userID = getUserId();

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/saved-recipes/ids/${userID}`
        );
        setSavedRepices(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    if (cookies.access_token) fetchSavedRecipe();
  }, []);

  const isRecipeSaved = (id: string) => savedRecipes?.includes(id);

  const saveRecipe = async (recipeID: string) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/recipes",
        {
          recipeID,
          userID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      setSavedRepices(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {cookies.access_token ? (
        isRecipeSaved(recipeId) ? (
          <button disabled>
            <FontAwesomeIcon icon={saved} className={style.savedRecipe} />
          </button>
        ) : (
          <button
            disabled={isRecipeSaved(recipeId)}
            onClick={() => saveRecipe(recipeId)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isHover ? (
              <FontAwesomeIcon icon={saved} className={style.savedButton} />
            ) : (
              <FontAwesomeIcon icon={unsaved} className={style.unsavedButton} />
            )}
          </button>
        )
      ) : null}
    </>
  );
};

export default SaveRecipeButton;
