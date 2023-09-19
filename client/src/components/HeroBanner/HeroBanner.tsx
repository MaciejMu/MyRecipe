import { Link } from "react-router-dom";
import style from "./HeroBanner.module.scss";

const HeroBanner = ({
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
        <img src={img} loading="eager"></img>
        <span data-aos="fade-right" data-aos-delay="200">
          <h4>{title}</h4>
          <p>{description}</p>
        </span>
      </section>
    </Link>
  );
};

export default HeroBanner;
