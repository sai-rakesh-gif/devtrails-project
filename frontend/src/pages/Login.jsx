import { useState } from "react";

function Login({ onNext }) {
  const [name, setName] = useState("");

  return (
    <div style={{
      textAlign: "center",
      marginTop: "150px"
    }}>
      <h2>Delivery Partner Login</h2>

      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", marginTop: "10px" }}
      />

      <br /><br />

      <button
        onClick={() => onNext(name)}
        style={{
          padding: "10px 20px",
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default Login;