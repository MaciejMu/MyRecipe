import style from "./TitleBanner.module.scss";

const TitleBanner = ({ img, title }: { img: string; title: string }) => {
  return (
    <section className={style.section}>
      <img src={img}></img>
      <h4>{title}</h4>
    </section>
  );
};

export default TitleBanner;
