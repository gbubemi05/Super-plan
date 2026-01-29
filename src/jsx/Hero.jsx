import heroimg from "../assets/images/heroimg.jpg";

export function Hero() {
  return (
    <div className="container grid-2rows">
      <div className="grid-row">
        <div className="container-h1">
          <h1>AI Compliance at Your Service</h1>
        </div>
        <div className="container-p">
          <p>
            Superplan Handles Heavy Lifting of Advice - From Gathering and
            researching complex policies, to researching Products and Delivering
            Client Ready Suitability Reports.
          </p>
        </div>

        <button className="pink-btn">Apply for Early Access</button>
      </div>
      <div className="grid-row">
        <img src={heroimg} alt="Hero image" className="hero-img" />
        <HeroInfo />
      </div>
    </div>
  );
}
export function HeroInfo() {
  return (
    <div className="hero-info">
      <span>Help more Clients </span>
      <span>Boost Productivity </span>
      <span>Drive Profitability </span>
    </div>
  );
}
