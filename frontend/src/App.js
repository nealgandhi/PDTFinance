import "./input.css";
import Form from "./components/Form";
import Data from "./components/Data";
import Requests from "./components/Requests";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request" element={<Form />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="overview" element={<Data />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
