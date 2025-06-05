import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulos from "../Components/SubTitulos";

const Bienvenida = () => {
  const [showBienvenida, setShowBienvenida] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowBienvenida(false);
    navigate("/home");
  };

  if (!showBienvenida) return null;

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      margin: "0",
      padding: "0",
      backgroundImage: "url('https://i.pinimg.com/736x/96/2b/8f/962b8f37d4427a960785ceae8885c23c.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    card: {
      backgroundColor: "#fda255", 
      borderRadius: "10px",
      boxShadow: "0px 4px 10px #602e34",
      padding: "30px",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
    },
    text: {
      marginBottom: "20px",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <SubTitulos titulo="Bienvenido a Book Tracker" />
        <p style={styles.text}>
          ¡Espero que esta herramienta pueda serte útil para gestionar tus hábitos de lectura!
        </p>
        <Button type="button" onClick={handleAccept} text="Aceptar" />
      </div>
    </div>
  );
};

export default Bienvenida;