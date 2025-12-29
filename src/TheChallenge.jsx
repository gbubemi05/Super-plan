export function TheChallenge() {
  const data = [
    {
      id: 1,
      heading: "Data Fragmentation",
      paragraph:
        "Too much time is lost re-keying data, chasing slow providers,fixing errors and using outdated tools for low-value tasks",
    },
    {
      id: 2,
      heading: "High admin Costs",
      paragraph:
        "Most firms solve admin by hiring more staff to handle required tasks-but it comes at a hefty cost ",
    },
    { id: 3, heading: "Regulatory risks", paragraph: "More rules more risks" },
  ];
  return (
    <section className="the-challenge">
      <div className="container">
        <div className="grid-col">
          <div>
            <span className="red-line"></span>
            <h2>The Challenge</h2>
          </div>
        </div>
        <div className="grid-col">
          <h1>
            Wealth firms are overwhelmed by legacy systems,regulatory overload
            and talent shortages.
          </h1>
        </div>
      </div>
    </section>
  );
}
