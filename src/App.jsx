import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Products from "./components/products/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./context/Providers";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.style.scrollBehavior = "smooth";
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Providers>
      <Router>
        <Navbar />
        <ScrollToTop />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <main>
                  <Products />
                </main>
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route
              path="/category/:category"
              element={
                <main>
                  <Products />
                </main>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Providers>
  );
}

export default App;
