import axios from "axios";
import { useState, useEffect } from "react";
import TitleBanner from "../components/TitleBanner/TitleBanner";
import QuickRecipeTile from "../components/QuickRecipeTile/QuickRecipeTile";
import Container from "../components/Container/Container";
import { RecipeProps } from "../types/Recipe";

const FastAndQuickRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    const featchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/recipes/Quick-&-Fast"
        );
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    featchRecipes();
  }, []);

  return (
    <>
      <TitleBanner
        img={
          "https://www.allrecipes.com/thmb/-b2s0KBpacuaiuaCjsZsdSv3Kug=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-21694-marinated-grilled-shrimp-ddmfs-4x3-0203-2000-a11ef792608c40c89c7318e322993f85.jpg"
        }
        title={"Quick & Fast"}
      />
      <br />
      <Container>
        <ul>
          {recipes.map((recipe, i) => (
            <li key={i} data-aos="fade-left">
              <QuickRecipeTile recipe={recipe} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default FastAndQuickRecipes;
