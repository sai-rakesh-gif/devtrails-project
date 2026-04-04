import plans from "../data/plans";
import Button from "../components/Button";

function Plan({ onSelect }) {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "120px"
    }}>
      <h2>Select Weekly Plan</h2>

      <p><b>Zone:</b> High Risk Area</p>

      {Object.keys(plans).map((key) => (
        <Button
          key={key}
          text={`${key} - ₹${plans[key].price} (₹${plans[key].coverage})`}
          onClick={() => onSelect(key)}
        />
      ))}
    </div>
  );
}

export default Plan;