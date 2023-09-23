import { Link } from "react-router-dom";
import style from "./Pagination.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { MutableRefObject } from "react";

const Pagination = ({
  limit,
  page,
  numOfRecipes,
  category,
  h1Ref,
}: {
  limit: number;
  page: number;
  numOfRecipes: number;
  category: string | null;
  h1Ref: MutableRefObject<HTMLHeadingElement | null>;
}) => {
  const nextPage = page + 1;
  const prevPage = page - 1;
  const maxPage = Math.ceil(numOfRecipes / limit);

  const ScrollToNewestRecipes = () => {
    h1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const createLink = (page: number) => {
    if (category) return `/?page=${page}&limit=${limit}&category=${category}`;
    else return `/?page=${page}&limit=${limit}`;
  };

  return maxPage > 1 ? (
    <div className={style.container}>
      {prevPage > 0 ? (
        <Link
          to={prevPage > 0 ? createLink(prevPage) : ""}
          onClick={ScrollToNewestRecipes}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} className={style.arrowDisabled} />
      )}
      {prevPage > 0 && (
        <Link to={createLink(prevPage)} onClick={ScrollToNewestRecipes}>
          {prevPage}
        </Link>
      )}
      <Link
        className={style.current}
        to={createLink(page)}
        onClick={ScrollToNewestRecipes}
      >
        {page}
      </Link>
      {nextPage <= maxPage && (
        <Link to={createLink(nextPage)} onClick={ScrollToNewestRecipes}>
          {nextPage}
        </Link>
      )}
      {maxPage >= 4 && nextPage !== maxPage ? (
        <>
          <p>...</p>
          <Link to={createLink(maxPage)} onClick={ScrollToNewestRecipes}>
            {maxPage}
          </Link>
        </>
      ) : null}
      {nextPage <= maxPage ? (
        <Link to={createLink(nextPage)} onClick={ScrollToNewestRecipes}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      ) : (
        <FontAwesomeIcon
          icon={faChevronRight}
          className={style.arrowDisabled}
        />
      )}
    </div>
  ) : null;
};

export default Pagination;
