import LimitButton from "../LimitButton/LimitButton";

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
    <>
      {limit < numOfRecipes && page === 1 ? (
        <LimitButton
          linkPath={createLink(showMore)}
          buttonLabel={"Show more"}
        />
      ) : null}
      {showLess > 4 && page === 1 ? (
        <LimitButton
          linkPath={createLink(showLess)}
          buttonLabel={"Show less"}
          arrowsUp
        ></LimitButton>
      ) : null}
    </>
  );
};

export default LimitControlers;
