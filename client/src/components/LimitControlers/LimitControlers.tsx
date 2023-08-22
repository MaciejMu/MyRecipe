import LimitButton from "../LimitButton/LimitButton";

const LimitControlers = ({
  limit,
  page,
  numOfRecipes,
}: {
  limit: number;
  page: number;
  numOfRecipes: number;
}) => {
  const showMore = limit + 4;
  const showLess = limit - 4;

  const createLink = (page: number, limit: number) => {
    return `/?page=${page}&limit=${limit}`;
  };

  return (
    <>
      {limit < numOfRecipes && page === 1 ? (
        <LimitButton
          linkPath={createLink(page, showMore)}
          buttonLabel={"Show more"}
        />
      ) : null}
      {showLess > 4 && page === 1 ? (
        <LimitButton
          linkPath={`/?page=${page}&limit=${showLess}`}
          buttonLabel={"Show less"}
          arrowsUp
        ></LimitButton>
      ) : null}
    </>
  );
};

export default LimitControlers;
