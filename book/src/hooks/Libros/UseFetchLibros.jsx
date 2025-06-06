import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
 
const UseFetchLibros =()=>{
 
    const [Libros, setLibros] = useState([]);
 
    const getLibros = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error fetching Libros");
            }
            const data = await response.json();
            setLibros(data);
           
        } catch (error) {
            console.error("Error fetching Libros:", error);
            toast.error("Error fetching Libros");
        }
    }
 
 
  const getLibrosById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        console.log("Failed to fetch Libros");
        throw new Error("Failed to fetch Libros");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Libros:", error);
      console.log("Failed to fetch Libros");
      return null;
    }
  };
 
 
    useEffect(() => {
        getLibros();
    }, []);
 
    return {
        Libros,
        getLibrosById,
        getLibros
    }
}
 
export default UseFetchLibros;