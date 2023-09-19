import { useEffect } from "react";
import Container from "../components/Container/Container";
import CreateRecipeForm from "../components/CreateRecipeForm/CreateRecipeForm";

const CreateRecipe = () => {
  useEffect(() => {
    document.title = "MyRecipe - Create Recipe";
  }, []);

  return (
    <Container>
      <CreateRecipeForm />
    </Container>
  );
};

export default CreateRecipe;
