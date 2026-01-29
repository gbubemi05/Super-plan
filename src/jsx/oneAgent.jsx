export function OneAgent() {
  const data = [
    { id: 1, text: "Admin workflow", icon: "bi bi-lightning-charge" },
    { id: 2, text: "Report writing", icon: "bi bi-file-text" },
    { id: 3, text: "Data harvesting", icon: "bi bi-folder-check" },
    { id: 4, text: "Fact finding", icon: "bi bi-bullseye" },
    { id: 5, text: "advice strategy", icon: "bi bi-chat-left-dots" },
    { id: 6, text: "Financial planning", icon: "bi bi-cash-coin" },
    { id: 7, text: "AI meetings", icon: "bi bi-stars" },
  ];
  return (
    <section className="section-oneAgent">
      <div className="container">
        <div className="title">
          <h1>One Agent</h1>
        </div>

        {data.map((data) => (
          <span key={data.id} className={`agent class-${data.id}`}>
            <span>
              <i className={` data-icon ${data.icon}`}></i>
              {data.text}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
