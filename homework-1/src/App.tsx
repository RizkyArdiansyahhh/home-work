import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import ProductsPage from "./pages/productsPage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import PageNotFound from "./pages/404";
import DetailProductPage from "./pages/DetailProductPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:slug" element={<DetailProductPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
