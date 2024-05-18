import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <Link to="/fruit">
        <h1>All Fruit</h1>
      </Link>
      <Link to="/random-fruit">
        <h1>Random Fruit</h1>
      </Link>
      <Link to="/new-fruit">
        <h1>New Fruit</h1>
      </Link>
    </div>
  );
}

/*
<Route path="/" element={<HomePage />} />
        <Route path="/fruit" element={<AllFruitPage />} />
        <Route path="/random-fruit" element={<RandomFruitPage />} />
        <Route path="/new-fruit" element={<AddFruitPage />} />
        <Route path="/fruit/:id" element={<FruitDetailsPage />} />

*/
export default HomePage;
