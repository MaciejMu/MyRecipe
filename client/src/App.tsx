import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Header/Header";
import PrivateRoutes from "./utilis/PrivateRoutes";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import FastAndQuickRecipes from "./pages/quick&fastRecipes";
import CreateRecipe from "./pages/create-recipe";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import SavedRecipes from "./pages/saved-recipes";
import SingleRecipe from "./pages/single-recipe";

const App = () => {
  useEffect(() => {
    document.title = "MyRecipe";
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/create-recipe" element={<CreateRecipe />}></Route>
          <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/:recipeID" element={<SingleRecipe />}></Route>
        <Route path="/Quick-&-Fast" element={<FastAndQuickRecipes />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
