import React from "react";
import ButtonAdd from "../components/ButtonAdd";
import ButtonEdit from "../components/ButtonEdit";
import ButtonDelete from "../components/ButtonDelet";
import useBooks from "./useBooks";

const Libros = () => {
  const { books, agregarLibro, editarLibro, eliminarLibro } = useBooks();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Gestión de Libros</h2>
      <ButtonAdd onClick={agregarLibro} />

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Autor</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Título</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Estado</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Género</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{book.autor}</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{book.titulo}</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{book.estado}</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{book.genero}</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                <ButtonEdit onClick={() => editarLibro(book.id)} />
                <ButtonDelete onClick={() => eliminarLibro(book.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Libros;