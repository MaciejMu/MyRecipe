import { useSearchParams } from "react-router-dom";
import LimitControlers from "../LimitControlers/LimitControlers";
import Pagination from "../Pagination/Pagination";
import style from "./PaginationContainer.module.scss";
import { MutableRefObject } from "react";

const PaginationContainer = ({
  numOfRecipes,
  h1Ref,
}: {
  numOfRecipes: number;
  h1Ref: MutableRefObject<HTMLHeadingElement | null>;
}) => {
  const [searchParams] = useSearchParams();
  const limitParam = parseInt(searchParams.get("limit") as string);
  const limit = limitParam ? limitParam : numOfRecipes > 8 ? 8 : numOfRecipes;
  const page = parseInt(searchParams.get("page") as string) || 1;
  const category = searchParams.get("category") || null;

  return numOfRecipes > 8 ? (
    <div className={style.container}>
      <LimitControlers
        limit={limit}
        page={page}
        numOfRecipes={numOfRecipes}
        category={category}
      />
      <Pagination
        h1Ref={h1Ref}
        limit={limit}
        page={page}
        numOfRecipes={numOfRecipes}
        category={category}
      />
    </div>
  ) : null;
};

export default PaginationContainer;
