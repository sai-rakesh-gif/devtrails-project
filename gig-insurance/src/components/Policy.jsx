function Policy({ setPolicyActive }) {
  return (
    <div className="card">

      <h2>Insurance Policy Model</h2>

      <p>
        Coverage: Income protection for gig workers against environmental disruptions
      </p>

      <h3>Weekly Structure:</h3>
      <p>Premium is calculated weekly based on risk score</p>

      <h3>🚫 Exclusions</h3>
      <ul className="exclusions">
        <li> No health or medical coverage</li>
        <li> No vehicle damage</li>
        <li> No accident compensation</li>
        <li> No life insurance</li>
      </ul>

      <button onClick={() => setPolicyActive(true)}>
        Activate Policy
      </button>

    </div>
  );
}

export default Policy;