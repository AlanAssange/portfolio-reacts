import "../App.css";
import FooterLayer from "./FooterLayer";
import IntroBanner from "./IntroBanner";
import { NavBar } from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import SkillsLayer from "./SkillsLayer";
import GithubLayer from "./GithubLayer";
import AboutMeLayer from "./AboutMeLayer";

function IntroLayer() {
  return (
    <div className="App">
      <NavBar />
      <IntroBanner />
      <AboutMeLayer/>
      <SkillsLayer />
      <GithubLayer />
      <FooterLayer />
    </div>
  );
}

export default IntroLayer;
