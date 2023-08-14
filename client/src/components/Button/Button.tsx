import style from "./Button.module.scss";

const Button = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}) => {
  return (
    <button type={type} onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
