import { useState } from "react";

function Registration({ setUser }) {
  const [name, setName] = useState("");

  return (
    <div className="card">
      <h2>Worker Registration</h2>

      <input
        placeholder="Enter Worker Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setUser(name)}>
        Register
      </button>
    </div>
  );
}

export default Registration;