const SelectInput = ({ name, label, options, register, error }) => {
  return (
    <div style={styles.container}>
      <label htmlFor={name} style={styles.label}>
        {label}
      </label>
      <div style={styles.selectContainer}>
        <select
          id={name}
          {...register(name, { required: `${label} is required` })}
          style={styles.select}
        >
          <option value="">Seleccionar</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

// Estilos en objeto CSS
const styles = {
  container: {
    marginBottom: "15px",
    width: "100%",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "4px",
  },
  selectContainer: {
    display: "flex",
    flexDirection: "column",
  },
  select: {
    width: "100%",
    padding: "6px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    transition: "border-color 0.3s ease",
    outline: "none",
  },
  error: {
    marginTop: "4px",
    fontSize: "12px",
    color: "#d32f2f",
  },
};

export default SelectInput;