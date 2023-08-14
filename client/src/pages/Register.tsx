import { useEffect } from "react";
import RegisterForm from "../components/RegisterFrom/RegisterForm";
import Container from "../components/Container/Container";

const Register = () => {
  useEffect(() => {
    document.title = "MyRecipe - Register";
  }, []);

  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

export default Register;
