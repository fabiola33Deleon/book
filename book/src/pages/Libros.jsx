import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput.";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import UseDataLibros from "../hooks/Libros/UseDataLibros";
import { optionSelect } from "../utils/apiUrl";

const Libros = () => {

  const methods = useForm();
  const{
    register,
    handleSubmit,
    errors,
  } = UseDataLibros(methods);
 
 return (
    <div style={styles.container}>
      <Link to="/home" style={styles.link}>
        Back To Dashboard
      </Link>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Titulo titulo="Libros" />
        <p style={styles.paragraph}>Todos los libros</p>

        <div style={styles.grid}>
          <InputText
            type="text"
            name="Libro"
            label="Libro"
            placeholder="Escribe el nombre del libro"
            register={register}
            errors={errors}
            style={styles.input}
          />

          <InputText
            type="text"
            name="Autor"
            label="Autor"
            placeholder="Escribe el nombre del autor"
            register={register}
            errors={errors}
            style={styles.input}
          />

          <InputText
            type="text"
            name="Genero"
            label="Género"
            placeholder="Escribe el género del libro"
            register={register}
            errors={errors}
            style={styles.input}
          />

          <InputText
            type="text"
            name="Año"
            label="Año"
            placeholder="Escribe el año del libro"
            register={register}
            errors={errors}
            style={styles.input}
          />

          <SelectInput
            label="Estado"
            options={optionSelect}
            register={register}
            errors={errors}
            name="Estado"
            style={styles.select}
          />
        </div>
        <Button type="submit" text="Save Libros" style={styles.button} />
      </form>
    </div>
  );
};

// Estilos en objeto CSS
const styles = {
  container: {
    maxWidth: "3000px",
    margin: "auto",
    padding: "30px",
    height: "100vh",
    backgroundImage: "url('https://i.pinimg.com/736x/30/9a/b7/309ab77f8bba4414d777e3bb5867e08b.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  link: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    display: "block",
    backgroundColor: "#d4edda",
    padding: "12px",
    borderRadius: "6px",
    transition: "background-color 0.3s ease",
    marginBottom: "20px",
  },
  form: {
    paddingBottom: "50px",
    backgroundColor: "#b89f8b",
    boxShadow: "3px 3px 15px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
  },
  paragraph: {
    marginBottom: "15px",
    fontSize: "16px",
    color: "#666",
  },
  grid: {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
 label: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
    display: "block",
  },

  input: {
    fontSize: "18px",
    padding: "20px 8px", // Más alto y más corto
    borderRadius: "8px",
    border: "2px solid #ccc",
    width: "80%", // Lo hice más corto en ancho
  },

   select: {
    fontSize: "18px",
    padding: "20px 8px", // Ajuste de altura
    borderRadius: "8px",
    border: "2px solid #ccc",
    width: "80%", // Más corto en ancho
    backgroundColor: "#fff",
  },

  button: {
    marginTop: "15px",
    fontSize: "18px",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Libros;
