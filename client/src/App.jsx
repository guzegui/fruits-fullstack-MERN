import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllFruitPage from "./pages/AllFruitPage";
import RandomFruitPage from "./pages/RandomFruitPage";
import AddFruitPage from "./pages/AddFruitPage";
import FruitDetailsPage from "./pages/FruitDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Fruit-o-Rama</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruit" element={<AllFruitPage />} />
        <Route path="/random-fruit" element={<RandomFruitPage />} />
        <Route path="/new-fruit" element={<AddFruitPage />} />
        <Route path="/fruit/:id" element={<FruitDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
