import { useSearchParams } from "react-router-dom";
import LimitControlers from "../LimitControlers/LimitControlers";
import Pagination from "../Pagination/Pagination";
import style from "./PaginationContainer.module.scss";

const PaginationContainer = ({ numOfRecipes }: { numOfRecipes: number }) => {
  const [searchParams] = useSearchParams();
  const limitParam = parseInt(searchParams.get("limit") as string);
  const limit = limitParam ? limitParam : numOfRecipes > 8 ? 8 : numOfRecipes;
  const page = parseInt(searchParams.get("page") as string) || 1;
  //   const category = searchParams.get("category") || "";

  return (
    <div className={style.container}>
      <LimitControlers limit={limit} page={page} numOfRecipes={numOfRecipes} />
      <Pagination limit={limit} page={page} numOfRecipes={numOfRecipes} />
    </div>
  );
};

export default PaginationContainer;
