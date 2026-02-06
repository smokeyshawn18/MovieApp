import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";

const App = () => {
  return (
    <main>
      <div className="pattern" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </main>
  );
};

export default App;
