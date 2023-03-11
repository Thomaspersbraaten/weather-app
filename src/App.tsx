import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityDetail from "./components/pages/CityDetail";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="container p-5">
      <h1 className="text-3xl font-bold underline my-4">Weather App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/:city" element={<CityDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
