import Accueil from "./Pages/Accueil";
import { Route, Routes } from "react-router-dom";
import {
  Clothes,
  Accessories,
  Electronics,
} from "./Components/Categories/CategoryItems";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </>
  );
}

export default App;
