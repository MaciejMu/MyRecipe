import { useEffect } from "react";
import Container from "../components/Container/Container";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  useEffect(() => {
    document.title = "MyRecipe - Login";
  }, []);

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default Login;
