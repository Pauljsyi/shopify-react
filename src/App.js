import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Cart />
        <NavMenu />
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
