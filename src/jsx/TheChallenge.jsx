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
    {
      id: 3,
      heading: "Regulatory risks",
      paragraph:
        "More rules more risks - for advisers and the compliance teams who guard against it ",
    },
  ];
  return (
    <section className="the-challenge">
      <div className="container">
        <div className="grid-col">
          <div className="title">
            <span className="red-line"></span>
            <h2>The Challenge</h2>
          </div>
          <h1>
            Wealth firms are overwhelmed by legacy systems,regulatory overload
            and talent shortages.
          </h1>
          <ul className="challenge-list">
            {data.map((data) => (
              <li className="challenge " id={data.id}>
                <div>
                  <span>
                    <span>
                      <i class="bi bi-x"></i>

                      <h3>{data.heading}</h3>
                    </span>
                  </span>
                  <p>{data.paragraph}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid-col time-revenue">
          <div>
            <h3 className="">30 hours</h3>
            <p>in support and admin tasks </p>
          </div>
          <div>
            <h3>$1.5k+</h3>
            <p>all in cost per case </p>
          </div>
        </div>
      </div>
    </section>
  );
}
