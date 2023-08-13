import { ReactNode } from "react";
import style from "./Containes.module.scss";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
