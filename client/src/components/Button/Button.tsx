import { ReactNode } from "react";
import style from "./Button.module.scss";

const Button = ({
  children,
  type,
  onClick,
  disabled,
}: {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={style.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
