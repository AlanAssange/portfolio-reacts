import "../App.css";
import FooterLayer from "./FooterLayer";
import IntroBanner from "./IntroBanner";
import { NavBar } from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import TalentsLayer from "./TalentsLayer";

function IntroLayer() {
  return (
    <div className="App">
      <NavBar />
      <IntroBanner />
      <TalentsLayer />
      <FooterLayer />
    </div>
  );
}

export default IntroLayer;
