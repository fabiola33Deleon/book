import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida";
import Home from "./pages/Home";
import Libros from "./Pages/Libros";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Bienvenida />} />  
          <Route path="/Home" element={<Home />} /> 
          <Route path="/Libros/:id?" element={<Libros />} />
        </Routes>
      </Router>
    <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;