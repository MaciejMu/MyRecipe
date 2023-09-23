import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import PrivateRoutes from "./utilis/PrivateRoutes";
import { useEffect, useMemo } from "react";
import Footer from "./components/Footer/Footer";
import FastAndQuickRecipes from "./pages/Quick&FastRecipes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleRecipe from "./pages/Single-recipe";
import Header from "./components/Header/Header";
import CreateRecipe from "./pages/Create-recipe";
import Home from "./pages/Home";
import SavedRecipes from "./pages/Saved-recipes";
import ScrollToTop from "./hooks/ScrollToTop";

const App = () => {
  useEffect(() => {
    document.title = "MyRecipe";
  }, []);
  const memoizedHeader = useMemo(() => <Header />, []);

  return (
    <BrowserRouter>
      {memoizedHeader}
      <ScrollToTop />
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
