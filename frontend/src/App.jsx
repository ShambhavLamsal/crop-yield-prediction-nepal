import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;