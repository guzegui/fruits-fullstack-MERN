import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const fruit_url = "http://localhost:5005";

function AllFruitPage() {
  const [fruit, setFruit] = useState([]);
  const [fruitFromAPI, setFruitFromAPI] = useState([]);
  const [searchFruit, setSearchFruit] = useState("");

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

  useEffect(() => {
    filterFruit();
  }, [searchFruit]);

  const filterFruit = () => {
    const filteredFruit = fruitFromAPI.filter((fruit) => {
      return fruit.name.toLowerCase().includes(searchFruit.toLowerCase());
    });
    setFruit(filteredFruit);
  };

  const handleChange = (e) => {
    const newFruit = e.target.value.toLowerCase();
    setSearchFruit(newFruit);
  };

  return (
    <div className="list-group">
      <input
        onChange={handleChange}
        value={searchFruit}
        placeholder="Search Fruit"
      />
      <br />
      <ul>
        {fruit.map((fruit) => (
          <li
            className="list-group-item list-group-item-action"
            key={fruit._id}
          >
            <Link to={`/fruit/${fruit._id}`} className="text-dark">
              <span style={{ fontSize: "50px" }}>{fruit.image_url}</span>
              <div className="container">
                <h3>{fruit.name}</h3>
                <p style={{ color: "grey" }}>{fruit.description}</p>
              </div>
            </Link>
            <div>
              {fruit.uses.map((use, index) => (
                <span key={index} className="badge bg-primary me-2 mb-2">
                  {use}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllFruitPage;