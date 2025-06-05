import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida";
import Home from "./pages/Home";
//import Libros from "./pages/Libros";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Bienvenida />} />  
          <Route path="/Home" element={<Home />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;