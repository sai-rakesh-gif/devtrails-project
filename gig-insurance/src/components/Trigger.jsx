function Trigger({ setClaim }) {

  const rainEvent = () => {
    setClaim(500);
  };

  const pollutionEvent = () => {
    setClaim(700);
  };

  const lowOrdersEvent = () => {
    setClaim(400);
  };

  const heatwaveEvent = () => {
    setClaim(600);
  };

  return (
    <div className="card">

      <h2>Disruption Detection System</h2>

      <button onClick={rainEvent}>
        Simulate Heavy Rain
      </button>

      <button onClick={pollutionEvent}>
        Simulate Pollution Alert
      </button>

      <button onClick={lowOrdersEvent}>
        Simulate Low Orders
      </button>

      <button onClick={heatwaveEvent}>
        Simulate Heatwave
      </button>

      <p>
        System uses parametric triggers to detect disruptions such as weather,
        pollution, and reduced workload, automatically initiating claims.
      </p>

    </div>
  );
}

export default Trigger;