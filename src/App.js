// import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const Favorite = lazy(() => import("./pages/Favorites/Favorites.jsx"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
