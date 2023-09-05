import { useEffect } from "react";
import Container from "../components/Container/Container";
import RecipesTilesGrid from "../components/RecipesTilesGrid/RecipesTilesGrid";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import NewsletterBanner from "../components/NewsletterBanner/NewsletterBanner";

const Home = () => {
  useEffect(() => {
    document.title = "MyRecipe";
  }, []);

  return (
    <>
      <HeroBanner
        img={
          "https://www.allrecipes.com/thmb/-b2s0KBpacuaiuaCjsZsdSv3Kug=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-21694-marinated-grilled-shrimp-ddmfs-4x3-0203-2000-a11ef792608c40c89c7318e322993f85.jpg"
        }
        title={"Quick & Fast"}
        description={
          "Need dinner quick? Find fast and easy pastas, chicken dishes, stir fry, and more."
        }
        linkTo={"/Quick-&-Fast"}
      />
      <Container>
        <h1>Newest Recipes</h1>
        <RecipesTilesGrid />
      </Container>
      <NewsletterBanner />
    </>
  );
};

export default Home;
