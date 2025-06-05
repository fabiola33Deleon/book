import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";

const AgregarLibro = () => {
  const { imagePreviews, handleImageChange, removeImageAtIndex } = useManageImage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/libros"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors"
      >
        Volver a la lista de libros
      </Link>

      <form className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4">
        <Titulo titulo="Agregar Nuevo Libro" />

        <p className="mt-1 text-sm text-gray-600">
          Ingrese la información del libro para agregarlo a su biblioteca.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Autor */}
          <InputText
            type="text"
            name="autor"
            label="Autor"
            placeholder="Ingrese el nombre del autor"
            value=""
            onChange={() => {}}
          />

          {/* Título */}
          <InputText
            type="text"
            name="titulo"
            label="Título"
            placeholder="Ingrese el nombre del libro"
            value=""
            onChange={() => {}}
          />

          {/* Estado */}
          <SelectInput
            label="Estado de Lectura"
            options={[
              { value: "Leído", label: "Leído" },
              { value: "Leyendo", label: "Leyendo" },
              { value: "Pendiente", label: "Pendiente" },
            ]}
            value=""
            onChange={() => {}}
          />

          {/* Género */}
          <InputText
            type="text"
            name="genero"
            label="Género"
            placeholder="Ingrese el género del libro (Ej. Ficción, Acción)"
            value=""
            onChange={() => {}}
          />
        </div>

        <Button type="submit" text="Guardar Libro" onClick={null} />
      </form>
    </div>
  );
};

export default AgregarLibro;