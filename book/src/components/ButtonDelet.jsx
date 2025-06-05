const ButtonDelete = ({ onClick }) => {
  const styles = {
    button: {
      backgroundColor: "red",
      color: "white",
      padding: "8px 16px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
  };

  return (
    <button
      style={styles.button}
      onClick={onClick}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      Eliminar
    </button>
  );
};

export default ButtonDelete;