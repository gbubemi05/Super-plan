import "./App.css";
import { HowItWorks, WorkingStage } from "./HowItWorks";
import { Header } from "./NavBar";
import { Hero } from "./Hero";
import { Testimonials } from "./Testimonials";
import { TheChallenge } from "./TheChallenge";
function App() {
  return (
    <body>
      <Header />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <TheChallenge />
      <OneAgent />
    </body>
  );
}
export default App;
