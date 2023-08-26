import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import style from "./ChevronsButton.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";

const ChevronsButton = ({
  type,
  arrowsUp,
  arrowsDown,
  onClick,
  className,
  children,
}: {
  type: "button" | "submit";
  arrowsUp?: boolean;
  arrowsDown?: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode | string;
}) => {
  return (
    <button
      type={type}
      className={clsx(style.button, { className: className })}
      onClick={onClick}
    >
      {arrowsUp && <FontAwesomeIcon icon={faChevronUp} />}
      {arrowsDown && <FontAwesomeIcon icon={faChevronDown} />}
      {children}
      {arrowsUp && <FontAwesomeIcon icon={faChevronUp} />}
      {arrowsDown && <FontAwesomeIcon icon={faChevronDown} />}
    </button>
  );
};

export default ChevronsButton;
