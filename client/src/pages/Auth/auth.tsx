import Login from "../../components/LoginForm/LoginForm";
import Register from "../../components/RegisterFrom/RegisterForm";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};
