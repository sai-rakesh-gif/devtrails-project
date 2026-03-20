import { useState } from "react";
import Login from "./pages/Login";
import Plan from "./pages/Plan";
import Dashboard from "./pages/Dashboard";

function App() {
  const [step, setStep] = useState("login");
  const [plan, setPlan] = useState(null);
  const [name, setName] = useState("");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial"
    }}>
      {step === "login" && (
        <Login
          onNext={(userName) => {
            setName(userName);
            setStep("plan");
          }}
        />
      )}

      {step === "plan" && (
        <Plan
          onSelect={(p) => {
            setPlan(p);
            setStep("dashboard");
          }}
        />
      )}

      {step === "dashboard" && (
        <Dashboard plan={plan} name={name} />
      )}
    </div>
  );
}

export default App;