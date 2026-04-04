import { useState } from "react";

function Premium({ setPremium }) {

  const [location, setLocation] = useState("Safe Zone");
  const [weather, setWeather] = useState("Normal");
  const [workload, setWorkload] = useState("Medium");

  // ===== AI RISK MODEL =====
  let riskScore = 0;

  // Location Risk (Hyper-local logic)
  if (location === "High Traffic") riskScore += 3;
  else riskScore += 1;

  // Weather Risk
  if (weather === "Rainy") riskScore += 2;

  // Workload Risk
  if (workload === "High") riskScore += 2;
  else if (workload === "Medium") riskScore += 1;

  // Base Premium
  let basePremium = 20;

  // Dynamic Pricing Model (AI Simulation)
  let premiumValue = basePremium + (riskScore * 4);

  // Discount for safe zones (AI-like behavior)
  if (location === "Safe Zone") {
    premiumValue -= 2;
  }

  setPremium(premiumValue);

  return (
    <div className="card">

      <h2>AI Risk-Based Premium Engine</h2>

      <div className="grid-box">

        <div>
          <label>Location</label><br />
          <select onChange={(e) => setLocation(e.target.value)}>
            <option>Safe Zone</option>
            <option>High Traffic</option>
          </select>
        </div>

        <div>
          <label>Weather</label><br />
          <select onChange={(e) => setWeather(e.target.value)}>
            <option>Normal</option>
            <option>Rainy</option>
          </select>
        </div>

        <div className="full-width">
          <label>Workload</label><br />
          <select onChange={(e) => setWorkload(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

      </div>

      <hr />

      <h3>Risk Score: {riskScore}</h3>

      <div className="premium-box">
        <h2>💰 Weekly Premium: ₹{premiumValue}</h2>
      </div>

      <p>
        AI model calculates premium using multi-factor risk scoring 
        (weather, location, workload) and applies dynamic pricing adjustments.
      </p>

    </div>
  );
}

export default Premium;