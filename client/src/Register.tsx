import { useEffect } from "react";
import RegisterForm from "./components/RegisterFrom/RegisterForm";

const Register = () => {
  useEffect(() => {
    document.title = "MyRecipe - Register";
  }, []);
  return (
    <div className="auth">
      <RegisterForm />
    </div>
  );
};

export default Register;
