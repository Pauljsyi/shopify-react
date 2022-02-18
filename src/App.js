import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />}>
            {/* <ProductPage /> */}
          </Route>
          <Route path="/" element={<Home />}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
