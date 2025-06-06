import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
 
const useLibrosAction = (getLibros) => {
  const navigate = useNavigate();
 
  //funcion para eliminar un usuario por su id
  // se usa async/await para manejar la asincronía de la llamada a la API
  const deleteLibros = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("Libros deleted successfully");
      console.log("Libros deleted:", response);
      getLibros();
    } catch (error) {
      console.error("Error deleting Libros:", error);
      toast.error("Failed to delete Libros");
    } finally {
      getLibros();
    }
  };
 
  // Función para manejar la actualización de un usuario
  // Esta función se llama cuando se hace clic en el botón de editar
  // y redirige al usuario a la página de edición del usuario
  // pasando el id del usuario como parámetro en la URL
  const handleUpdateLibros = (id) => {
    navigate(`/Libros/${id}`);
  };
 
  return {
    deleteLibros,
    handleUpdateLibros,
  };
};
 
export default useLibrosAction;
 
 