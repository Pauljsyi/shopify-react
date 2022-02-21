import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <h1>FOOTER</h1>
      </Router>
    </div>
  );
}

export default App;
