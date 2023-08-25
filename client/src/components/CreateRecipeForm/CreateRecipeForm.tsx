import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserId from "../../hooks/getUserId";
import { useCookies } from "react-cookie";
import Button from "../Button/Button";
import style from "./CreateRecipeForm.module.scss";

const CreateRecipeForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _] = useCookies();
  const userID = getUserId();
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [""],
    instructions: [""],
    imageUrl: "",
    cookingTime: 0,
    creator: userID,
    likesCounter: 0,
    category: "",
  });

  const navigate = useNavigate();

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleAddInstruction = () => {
    setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] });
  };

  const handleIngredientChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleInstructionChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const instructions = recipe.instructions;
    instructions[index] = value;
    setRecipe({ ...recipe, instructions });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:3001/recipes", recipe, {
        headers: { authorization: cookies.access_token },
      });
      alert("Recipe created!");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  return (
    <>
      <h1>Create Recipe</h1>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="caterories">Category:</label>
          <select
            required
            id="categories"
            name="category"
            value={recipe.category}
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Breakfast-and-Brunch">Breakfast and Brunch</option>
            <option value="Lunch">Lunch</option>
            <option value="Main Dishes">Main Dishes</option>
            <option value="Healty">Healty</option>
            <option value="Appetizers-and-Snacks">Appetizers and Snacks</option>
            <option value="Salad">Salad</option>
            <option value="Side-Dishes">Side Dishes</option>
            <option value="Soup">Soup</option>
            <option value="Bread">Bread</option>
            <option value="Drinks">Drinks</option>
            <option value="Desserts">Desserts</option>
          </select>
          <label htmlFor="ingredients">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              required
              key={index}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
            />
          ))}
          <Button type="button" onClick={handleAddIngredient}>
            ▼ Add Ingredient
          </Button>
          <label htmlFor="instructions">Instructions</label>
          {recipe.instructions.map((instruction, index) => (
            <input
              required
              key={index}
              type="text"
              name="instructions"
              value={instruction}
              onChange={(event) => handleInstructionChange(event, index)}
            />
          ))}
          <Button type="button" onClick={handleAddInstruction}>
            ▼ Add Instruction
          </Button>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            required
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
          />
          <label htmlFor="cookingTime">Cooking Time (minutes)</label>
          <input
            required
            type="number"
            id="cookingTime"
            name="cookingTime"
            max={420}
            min={1}
            value={recipe.cookingTime}
            onChange={handleChange}
          />
          <Button type="submit">✚ Create Recipe</Button>
        </form>
      </div>
    </>
  );
};

export default CreateRecipeForm;
