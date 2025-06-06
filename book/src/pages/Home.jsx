import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import UseFetchLibros from "../hooks/Libros/UseFetchLibros";
import { optionSelect } from "../utils/apiUrl";
import UseLibrosActions from "../hooks/Libros/UseLibrosActions";


const Home = () => {
  const { Libros, getLibros } = UseFetchLibros();
  const { deleteLibros, handleUpdateLibros } = UseLibrosActions(getLibros);

  return (
    <div style={styles.container}>
      <Link to="/Libros" style={styles.link}>
        Agregar Libro
      </Link>

      <Titulo titulo="Libros Information" />

      <p style={styles.paragraph}>Lista de Libros registrados.</p>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th}>Libro</th>
              <th style={styles.th}>Autor</th>
              <th style={styles.th}>Género</th>
              <th style={styles.th}>Año</th>
              <th style={styles.th}>Estado</th>
              <th style={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Libros?.map((libro) => (
              <tr key={libro.id} style={styles.tr}>
                <td style={styles.td}>{libro.Libro}</td>
                <td style={styles.td}>{libro.Autor}</td>
                <td style={styles.td}>{libro.Genero}</td>
                <td style={styles.td}>{libro.Año}</td>
                <td style={styles.td}>
                  {optionSelect.find((opt) => opt.value === libro.Estado)?.label}
                </td>
                <td style={styles.td}>
                  <div style={styles.buttonContainer}>
                    <Button text="Editar" onClick={() => handleUpdateLibros(libro.id)} />
                    <Button text="Eliminar" onClick={() => deleteLibros(libro.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Estilos en objeto CSS
const styles = {
  container: {
    maxWidth: "3000px",
    margin: "auto",
    padding: "100px",
    height: "100vh",
    backgroundImage: "url('https://i.pinimg.com/736x/30/9a/b7/309ab77f8bba4414d777e3bb5867e08b.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

  },
  link: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    display: "block",
    backgroundColor: "#d4edda",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    marginBottom: "20px",
  },
  paragraph: {
    marginBottom: "10px",
    fontSize: "14px",
    color: "#666",
  },
  tableContainer: {
    overflowX: "auto",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    backgroundColor: "#fff",
    borderCollapse: "collapse",
  },
  thead: {
    backgroundColor: "#f0f0f0",
    color: "#333",
  },
  th: {
    padding: "12px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    fontSize: "14px",
  },
  tr: {
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.3s ease",
  },
  td: {
    padding: "12px",
    fontSize: "14px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px", // Espacio entre botones
  },
};

export default Home;
