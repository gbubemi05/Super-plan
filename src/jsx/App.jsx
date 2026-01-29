import "../App.css";
import { HowItWorks, WorkingStage } from "./HowItWorks";
import { Header } from "./NavBar";
import { Hero } from "./Hero";
import { Testimonials } from "./Testimonials";
import { TheChallenge } from "./TheChallenge";
import { OneAgent } from "./oneAgent.jsx";
import { SectionTeam } from "./section-team.jsx";
function App() {
  return (
    <body>
      <Header />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <TheChallenge />
      <OneAgent />
      <SectionTeam />
    </body>
  );
}
export default App;
