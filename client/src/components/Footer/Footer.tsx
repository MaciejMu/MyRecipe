import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={style.section}>
        <div>
          <Link to={"/"}>
            <h1>
              <FontAwesomeIcon icon={faWineBottle} />
              myrecipes
            </h1>
          </Link>
          <h5>
            Created by <span>Maciej Muter</span>
          </h5>
        </div>
        <div>
          <h4>My other projects</h4>
          <ul>
            <li>
              <Link to={"https://portfolio-maciejmu.vercel.app/"}>
                MyPortfolio
              </Link>
            </li>
            <li>
              <Link to={"https://waiter-helper.vercel.app/"}>WaiterHelper</Link>
            </li>
            <li>
              <Link to={"https://beers-page.vercel.app/"}>BeerPage</Link>
            </li>
            <li>
              <Link to={"https://maciej-muter-slowko.netlify.app/"}>
                Słówko
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact Me</h4>
          <Link to={"https://github.com/MaciejMu"}>
            <FontAwesomeIcon icon={faGithub} />
            Github
          </Link>
          <Link to={"mailto:maciejmuter@gmail.com"}>
            <FontAwesomeIcon icon={faEnvelope} />
            Mail
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
