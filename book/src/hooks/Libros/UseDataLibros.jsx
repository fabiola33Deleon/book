import { useEffect } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import UseFetchLibros from "./UseFetchLibros";

const useDataLibros = (methods) => {
  const { getLibrosById, getLibros } = UseFetchLibros();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  // Validación de campos antes de enviar
  const validateFields = (dataForm) => {
    if (!dataForm.Libro?.trim() || !dataForm.Autor?.trim() || !dataForm.Genero?.trim() || !dataForm.Año || !dataForm.Estado) {
      toast.error("Todos los campos son obligatorios");
      return false;
    }

    if (dataForm.Libro.length < 3) {
      toast.error("El nombre del libro debe tener al menos 3 caracteres");
      return false;
    }

    if (dataForm.Autor.length < 3) {
      toast.error("El nombre del autor debe tener al menos 3 caracteres");
      return false;
    }

    if (isNaN(dataForm.Año) || dataForm.Año.toString().length !== 4) {
      toast.error("El año debe ser un número de 4 dígitos");
      return false;
    }

    const validStates = ["Leído", "leyendo", "pendiente"];
    if (!validStates.includes(dataForm.Estado.toLowerCase())) {
      toast.error("El estado debe ser 'Leído', 'leyendo' o 'pendiente'");
      return false;
    }

    return true;
  };

  // Guardar libro
  const saveLibrosForm = async (dataForm) => {
    if (!validateFields(dataForm)) return;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("Error al guardar el libro");
        throw new Error("Failed to add Libros");
      }

      toast.success("Libro guardado correctamente");
      navigate("/home");
    } catch (error) {
      console.error("Error al enviar:", error);
      toast.error("Hubo un problema al guardar el libro");
    } finally {
      reset();
      getLibros();
    }
  };

  // Editar libro
  const editLibros = async (dataForm) => {
    if (!validateFields(dataForm)) return;

    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("Error al actualizar el libro");
        throw new Error("Failed to update Libros");
      }

      toast.success("Libro actualizado correctamente");
      navigate("/home");
    } catch (error) {
      console.error("Error actualizando:", error);
      toast.error("Hubo un problema al actualizar el libro");
    } finally {
      reset();
      getLibros();
    }
  };

  const handleLibrosAction = (dataForm) => {
    if (id) {
      editLibros(dataForm);
    } else {
      saveLibrosForm(dataForm);
    }
  };

  const handleUpdateLibros = (id) => {
    navigate(`/Libros/${id}`);
  };

  const loadLibros = async () => {
    if (id) {
      const Libros = await getLibrosById(id);
      if (Libros) {
        reset({
          Autor: Libros?.Autor,
          Libro: Libros?.Libro,
          Genero: Libros?.Genero,
          Estado: Libros?.Estado,
          Anio: Libros?.Anio,
        });
      }
    }
  };

  useEffect(() => {
    loadLibros();
  }, [id]);

  return {
    register,
    handleSubmit: handleSubmit(handleLibrosAction),
    errors,
    getLibrosById,
    handleUpdateLibros,
    loadLibros,
  };
};

export default useDataLibros;