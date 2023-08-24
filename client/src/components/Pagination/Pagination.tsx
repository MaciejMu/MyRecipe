import { Link } from "react-router-dom";
import style from "./Pagination.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
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
  const nextPage = page + 1;
  const prevPage = page - 1;
  const maxPage = Math.ceil(numOfRecipes / limit);

  const createLink = (page: number) => {
    if (category) return `/?page=${page}&limit=${limit}&category=${category}`;
    else return `/?page=${page}&limit=${limit}`;
  };

  return maxPage > 1 ? (
    <div className={style.container}>
      {prevPage > 0 ? (
        <Link to={prevPage > 0 ? createLink(prevPage) : ""}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} className={style.arrowDisabled} />
      )}
      {prevPage > 0 && <Link to={createLink(prevPage)}>{prevPage}</Link>}
      <Link className={style.current} to={createLink(page)}>
        {page}
      </Link>
      {nextPage <= maxPage && <Link to={createLink(nextPage)}>{nextPage}</Link>}
      {maxPage >= 4 && nextPage !== maxPage ? (
        <>
          <p>...</p>
          <Link to={createLink(maxPage)}>{maxPage}</Link>
        </>
      ) : null}
      {nextPage <= maxPage ? (
        <Link to={createLink(nextPage)}>
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
