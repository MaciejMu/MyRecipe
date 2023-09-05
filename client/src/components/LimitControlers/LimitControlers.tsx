import { Link } from "react-router-dom";
import ChevronsButton from "../ChevronsButton/ChevronsButton";
import style from "./LimitControlers.module.scss";

const LimitControlers = ({
  limit,
  page,
  numOfRecipes,
  category,
}: {
  limit: number;
  page: number;
  numOfRecipes: number;
  category: string | null;
}) => {
  const showMore = limit + 4;
  const showLess = limit - 4;

  const createLink = (limit: number) => {
    if (category) return `/?page=${page}&limit=${limit}&category=${category}`;
    else return `/?page=${page}&limit=${limit}`;
  };

  return (
    <section className={style.section}>
      {showLess > 4 && page === 1 ? (
        <Link to={createLink(showLess)}>
          <ChevronsButton arrowsUp type={"button"}>
            Show less
          </ChevronsButton>
        </Link>
      ) : null}
      {limit < numOfRecipes && page === 1 ? (
        <Link to={createLink(showMore)}>
          <ChevronsButton arrowsDown type={"button"}>
            Show more
          </ChevronsButton>
        </Link>
      ) : null}
    </section>
  );
};

export default LimitControlers;
