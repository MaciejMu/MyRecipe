import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};
