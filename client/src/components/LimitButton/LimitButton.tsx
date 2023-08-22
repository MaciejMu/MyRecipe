import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import style from "./LimitButton.module.scss";

const LimitButton = ({
  linkPath,
  buttonLabel,
  arrowsUp,
}: {
  linkPath: string;
  buttonLabel: string;
  arrowsUp?: boolean;
}) => {
  return (
    <Link to={linkPath}>
      <button className={style.button}>
        {arrowsUp ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
        {buttonLabel}
        {arrowsUp ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
    </Link>
  );
};

export default LimitButton;
