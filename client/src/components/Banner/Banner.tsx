import { Link } from "react-router-dom";
import style from "./Banner.module.scss";

const Banner = ({
  img,
  title,
  description,
  linkTo,
}: {
  img: string;
  title: string;
  description: string;
  linkTo: string;
}) => {
  return (
    <Link to={linkTo}>
      <section className={style.section}>
        <img src={img}></img>
        <span>
          <h4>{title}</h4>
          <p>{description}</p>
        </span>
      </section>
    </Link>
  );
};

export default Banner;
