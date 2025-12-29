export function HowItWorks() {
  return (
    <section className="section-how-it-works">
      <div className="container">
        <div className="container-h1">
          <h2>HOW IT WORKS </h2>
          <h1>Financial Advice as Easy as Hitting 'Send'</h1>
        </div>
        <div className="grid-3-cols">
          <WorkingStage />
        </div>
      </div>
    </section>
  );
}

export function WorkingStage() {
  const data = [
    {
      id: 1,
      heading: "upload a client case",
      paragraph:
        "Upload documents or clients info - no templates no manual data entry",
    },
    {
      id: 2,
      heading: "AI + expert review",
      paragraph:
        "AI structures the data. Human paraplanners refne and check complaiance",
    },
    {
      id: 3,
      heading: "Reports you can trust",
      paragraph:
        "Get regulator-ready-reports-faster-accurateand fully reviewed",
    },
  ];

  return (
    <>
      {data.map((data) => (
        <div key={data.id} className="stage-item">
          <span>{data.id}</span>
          <h4>{data.heading}</h4>
          <p>{data.paragraph}</p>
        </div>
      ))}
    </>
  );
}
