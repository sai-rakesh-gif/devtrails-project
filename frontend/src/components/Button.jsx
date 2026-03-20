function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 25px",
        margin: "10px",
        background: "#38bdf8",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}

export default Button;