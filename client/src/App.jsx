import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const fruit_url = "http://localhost:5005";

function App() {
  const [fruit, setFruit] = useState([]);

  useEffect(() => {
    axios
      .get(`${fruit_url}/fruit`)
      .then((response) => {
        console.log(response.data);
        setFruit(response.data);
      })
      .catch((e) => console.log(`Error fetching data => ${e.message}`));
  }, []);

  return <>{`Here's the fruit ${fruit}`}</>;
}

export default App;
