import { useState } from "react";
import Registration from "./components/Registration";
import Policy from "./components/Policy";
import Premium from "./components/Premium";
import Trigger from "./components/Trigger";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [policyActive, setPolicyActive] = useState(false);
  const [premium, setPremium] = useState(20);
  const [claim, setClaim] = useState(null);

  return (
    <div className="container">

      {/* 🔥 UPDATED TITLE */}
      <h1>
        Smart Zone-Based Income Protection for Delivery Riders
      </h1>

      <p>
        AI-Driven Parametric Insurance System for Gig Workers
      </p>

      {/* Registration */}
      <Registration setUser={setUser} />

      {/* Policy */}
      {user && <Policy setPolicyActive={setPolicyActive} />}

      {/* Premium */}
      {policyActive && (
        <Premium setPremium={setPremium} />
      )}

      {/* Trigger */}
      {policyActive && (
        <Trigger setClaim={setClaim} />
      )}

      {/* Claim Output */}
      {claim && (
        <div className="claim-box">
          <h2>Claim Approved ✅</h2>
          <p>₹{claim} credited to worker</p>
        </div>
      )}

    </div>
  );
}

export default App;