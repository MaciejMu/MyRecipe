import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import CreateRecipe from "./pages/create-recipe";
import SavedRecipies from "./pages/saved-recipies";
import { Auth } from "./pages/Auth/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-recipe" element={<CreateRecipe />}></Route>
        <Route path="/saved-recipe" element={<SavedRecipies />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
