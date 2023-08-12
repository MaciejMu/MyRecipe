import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import CreateRecipe from "./pages/Create-recipe";
import PrivateRoutes from "./utilis/PrivateRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SavedRecipes from "./pages/Saved-recipes";
import Register from "./Register";

const App = () => {
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
