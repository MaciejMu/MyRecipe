import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import CreateRecipe from "./pages/create-recipe";
import { Auth } from "./pages/Auth/auth";
import SavedRecipes from "./pages/saved-recipes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-recipe" element={<CreateRecipe />}></Route>
        <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
