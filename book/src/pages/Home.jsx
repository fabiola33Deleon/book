import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonEdit from "../components/ButtonEdit";
import ButtonDelete from "../components/ButtonDelet";
imp

const users = [
  {
    id: 1,
    autor: "Isabel Allende",
    libro: "La Casa de los Espíritus",
    estado: "Leyendo", // Estado fijo (no editable)
    genero: "Acción",
  },
];

const Home = () => {
  const [userData] = useState(users); // No se puede modificar

  const styles = {
  container: {
    width: "100vw", // Ocupa todo el ancho de la pantalla
    height: "100vh", // Mantiene la altura completa
    margin: "auto",
    padding: "15px",
    backgroundImage: "url('https://source.unsplash.com/1920x600/?books')", // Imagen más horizontal
    backgroundSize: "100% auto", // Mantiene proporción horizontal sin distorsión
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      borderRadius: "10px",
      overflow: "hidden",
      backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo semi-transparente
      padding: "20px",
      borderRadius: "10px",
    },
    thTd: {
      padding: "12px",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
    },
    header: {
      backgroundColor: "#f4f4f4",
      color: "#333",
      fontWeight: "bold",
    },
    buttonsContainer: {
      display: "flex",
      gap: "15px", // Espaciado entre botones
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.container}>
      <Link
        to="/Libros"
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          marginBottom: "20px",
          transition: "background-color 0.3s",
        }}
      >
        Agregar Libros
      </Link>

      <h2 style={{ textAlign: "center", marginBottom: "10px", color: "white" }}>
        Lista de Libros Registrados
      </h2>

      <table style={styles.table}>
        <thead style={styles.header}>
          <tr>
            <th style={styles.thTd}>Autor</th>
            <th style={styles.thTd}>Libro</th>
            <th style={styles.thTd}>Estado</th>
            <th style={styles.thTd}>Género</th>
            <th style={styles.thTd}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td style={styles.thTd}>{user.autor}</td>
              <td style={styles.thTd}>{user.libro}</td>
              <td style={styles.thTd}>{user.estado}</td>
              <td style={styles.thTd}>{user.genero}</td>
              <td style={styles.thTd}>
                <div style={styles.buttonsContainer}>
                  <ButtonEdit onClick={() => alert(`Editando ${user.libro}`)} />
                  <ButtonDelete onClick={() => alert(`Eliminando ${user.libro}`)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;