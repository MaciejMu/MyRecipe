import LimitButton from "../LimitButton/LimitButton";
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
        <LimitButton
          linkPath={createLink(showLess)}
          buttonLabel={"Show less"}
          arrowsUp
        ></LimitButton>
      ) : null}
      {limit < numOfRecipes && page === 1 ? (
        <LimitButton
          linkPath={createLink(showMore)}
          buttonLabel={"Show more"}
        />
      ) : null}
    </section>
  );
};

export default LimitControlers;
