import { useState } from "react";
import { books as initialBooks } from "../utils/booksData";

const useBooks = () => {
  const [books, setBooks] = useState(initialBooks);

  const agregarLibro = (nuevoLibro) => {
    setBooks([...books, { id: books.length + 1, ...nuevoLibro }]);
  };

  return { books, agregarLibro };
};

export default useBooks;