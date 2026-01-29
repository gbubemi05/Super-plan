export function SectionTeam() {
  const data = [
    {
      id: 1,
      text: "Annual review",
    },
    {
      id: 2,
      text: "Investment modelling",
    },
    {
      id: 1,
      text: "Family planning strategy",
    },
  ];
  return (
    <section className="section-team">
      <div className="container container-team">
        <div className="container-h1">
          <h1>Make your team unstoppable</h1>
        </div>
        <div className="grid-2cols">
          <Grid1 data={data} />
          <Grid2 />
        </div>
      </div>
    </section>
  );
}

function Grid1({ data }) {
  return (
    <div className="gridcol">
      <div className="profile-card">
        <div className="profile-head">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="picture of dylan"
          />
          <span>
            <h3>Dylan George</h3>
            <p>Flowers.com Ltd</p>
          </span>
        </div>
        <div className="bar greybar">
          <i class="bi bi-shop-window"></i>
          <p>Maximizing long-term investment</p>
        </div>
        <ul>
          {data.map((data) => (
            <li id={data.id} className="checklist">
              <figure>{data.text}</figure> <i class="bi bi-check-lg"></i>
            </li>
          ))}{" "}
        </ul>
        <div className="bar greenbar">
          <i class="bi bi-shop-window"></i>
          <p>Over achieved savings goal by 12%</p>
        </div>
      </div>
      <div className="more-info">
        <h2 className="heading">Personalised advice ,zero delays</h2>
        <p>
          Superplan works alongside advisers paraplaners to take you from fact
          to final recommendation with easy-speeding financial planning while
          keeping the human touch
        </p>
      </div>
    </div>
  );
}

function Grid2() {
  return (
    <div className="grid-col">
      <div className="grid-row">
        <span className="  greybar leftalign">
          What's the status on Mark's finances ?
        </span>
        <div className="thinkbox">
          <span className="thinking">Analyze 28 documents </span>
          <span className="thinking">
            run compliance checks across advice case
          </span>
          <div className="answerbox">{}</div>
        </div>
      </div>
    </div>
  );
}
