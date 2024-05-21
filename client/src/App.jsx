import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllFruitPage from "./pages/AllFruitPage";
import RandomFruitPage from "./pages/RandomFruitPage";
import AddFruitPage from "./pages/AddFruitPage";
import FruitDetailsPage from "./pages/FruitDetailsPage";
import NavBar from "./components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [fruitFromAPI, setFruitFromAPI] = useState([]);
  const fruit_url = "http://localhost:5005";
  const [fruit, setFruit] = useState([]);

  useEffect(() => {
    axios
      .get(`${fruit_url}/fruit`)
      .then((response) => {
        console.log(response.data);
        setFruit(response.data);
        setFruitFromAPI(response.data);
      })
      .catch((e) => console.log(`Error fetching data => ${e.message}`));
  }, []);

  const randomFruit = Math.floor(Math.random() * fruitFromAPI.length);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              fruitFromAPI={fruitFromAPI}
              fruit={fruit}
              setFruit={setFruit}
            />
          }
        />
        <Route
          path="/fruit"
          element={
            <AllFruitPage
              fruitFromAPI={fruitFromAPI}
              fruit={fruit}
              setFruit={setFruit}
            />
          }
        />
        <Route path="/random-fruit" element={<RandomFruitPage />} />
        <Route path="/new-fruit" element={<AddFruitPage />} />
        <Route path="/fruit/:id" element={<FruitDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
