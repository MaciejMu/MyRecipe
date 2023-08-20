import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as saved } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unsaved } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import getUserId from "../../hooks/getUserId";
import style from "./SaveRecipeButton.module.scss";
import clsx from "clsx";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const SaveRecipeButton = ({
  recipeId,
  black,
  likesCounter,
  initailCounter,
}: {
  recipeId: string;
  black?: boolean;
  likesCounter?: boolean;
  initailCounter?: number;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _] = useCookies();
  const [isHover, setIsHover] = useState(unsaved);
  const [savedRecipes, setSavedRepices] = useState<string[]>([]);
  const userID = getUserId();
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState<number | undefined>(
    initailCounter
  );

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

  const saveRecipe = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    recipeID: string
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const saveResponse = await axios.put(
        "http://localhost:3001/recipes/save",
        {
          recipeID,
          userID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      const addResponse = await axios.patch(
        "http://localhost:3001/recipes/counter-add",
        {
          recipeID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      setSavedRepices(saveResponse.data.savedRecipes);
      setNumberOfLikes(addResponse.data.likesCounter);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  const unsaveRecipe = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    recipeID: string
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const unsaveResponse = await axios.patch(
        `http://localhost:3001/recipes/unsave`,
        {
          userID,
          recipeID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      const subtractResponse = await axios.patch(
        "http://localhost:3001/recipes/counter-subtract",
        {
          recipeID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      setSavedRepices(unsaveResponse.data.savedRecipes);
      setNumberOfLikes(subtractResponse.data.likesCounter);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <>
      {cookies.access_token ? (
        isRecipeSaved(recipeId) ? (
          <button disabled={isLoading}>
            {isLoading ? (
              <ClipLoader
                color={black ? "#000000" : "#ffffff"}
                size={15}
                className={clsx(black && style.black)}
              />
            ) : (
              <FontAwesomeIcon
                icon={saved}
                className={style.savedRecipe}
                onClick={(e) => unsaveRecipe(e, recipeId)}
              />
            )}
          </button>
        ) : (
          <button
            disabled={isLoading}
            onClick={(e) => saveRecipe(e, recipeId)}
            onMouseEnter={() => setIsHover(saved)}
            onMouseLeave={() => setIsHover(unsaved)}
          >
            {isLoading ? (
              <ClipLoader
                color={black ? "#000000" : "#ffffff"}
                size={15}
                className={clsx(black && style.black)}
              />
            ) : (
              <FontAwesomeIcon
                icon={isHover}
                className={clsx(style.savedButton, black && style.black)}
              />
            )}
          </button>
        )
      ) : (
        <Link
          to={"/login"}
          onMouseEnter={() => setIsHover(saved)}
          onMouseLeave={() => setIsHover(unsaved)}
        >
          <FontAwesomeIcon
            icon={isHover}
            className={clsx(style.savedButton, black && style.black)}
          />
        </Link>
      )}
      {likesCounter ? <p>{numberOfLikes}</p> : null}
    </>
  );
};

export default SaveRecipeButton;
