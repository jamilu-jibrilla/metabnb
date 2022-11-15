import Home from "./pages/Home";
import Place from "./pages/Place";
import { Routes, Route } from "react-router-dom";
import App from "./App";

const Router = () => {
    
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="place" element={<Place />} />
      </Route>
    </Routes>
  );
};

export default Router