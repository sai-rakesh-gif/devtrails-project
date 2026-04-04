import { useState } from "react";
import { calculatePayout } from "../utils/payoutCalculator";

function Dashboard({ plan, name }) {
  const [payout, setPayout] = useState(null);
  const [stage, setStage] = useState("");

  // ✅ Risk based on environment (not plan)
  const getZoneDetails = () => {
    return {
      zone: "High Risk",
      score: "8/10 🔴"
    };
  };

  const zoneData = getZoneDetails();

  const simulateDisruption = () => {
    setStage("detecting");

    setTimeout(() => {
      setStage("validating");

      setTimeout(() => {
        setStage("calculating");

        const payoutAmount = calculatePayout(plan);

        setTimeout(() => {
          setPayout(payoutAmount);
          setStage("completed");
        }, 800);

      }, 800);

    }, 800);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      
      <h2>Rider Dashboard</h2>
      <p style={{ color: "#94a3b8" }}>
        Smart Income Protection System
      </p>

      {/* User + Plan Info */}
      <div style={card}>
        <p><b>User:</b> {name}</p>
        <p><b>Plan:</b> {plan}</p>
        <p><b>Zone:</b> {zoneData.zone}</p>
        <p><b>Risk Score:</b> {zoneData.score}</p>
        <p><b>Peak Hours:</b> 6PM - 10PM</p>
      </div>

      {/* Live Conditions */}
      <div style={card}>
        <h3>🌦 Live Conditions</h3>
        <p>🌧 Rainfall: 60mm</p>
        <p>🌡 Temperature: 43°C</p>
        <p>🌫 AQI: 320</p>

        <p style={{
          color: "#ef4444",
          fontWeight: "bold"
        }}>
          ⚠ Threshold Exceeded
        </p>
      </div>

      {/* Trigger Button */}
      <button style={primaryBtn} onClick={simulateDisruption}>
        Detect Disruption
      </button>

      {/* Status Box */}
      {stage && (
        <div style={statusBox}>
          {stage === "detecting" && "Detecting disruption..."}
          {stage === "validating" && "Validating rider activity..."}
          {stage === "calculating" && "Calculating income loss..."}
          {stage === "completed" && "Payout processed successfully"}
        </div>
      )}

      {/* Validation Result */}
      {stage === "completed" && (
        <div style={card}>
          <p>AI Check: Activity Verified ✔</p>
          <p>GPS Status: Valid ✔</p>
        </div>
      )}

      {/* Final Payout */}
      {payout && (
        <h2 style={{
          color: "#22c55e",
          marginTop: "20px"
        }}>
          ₹{payout} Payout Processed
        </h2>
      )}
    </div>
  );
}

// Styles
const card = {
  background: "#1e293b",
  padding: "20px",
  margin: "20px auto",
  borderRadius: "12px",
  width: "320px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
};

const primaryBtn = {
  background: "#22c55e",
  color: "white",
  padding: "14px 30px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px"
};

const statusBox = {
  background: "#334155",
  padding: "12px",
  marginTop: "20px",
  borderRadius: "8px"
};

export default Dashboard;