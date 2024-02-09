import CardInputGroup from "../components/CardInputGroup";
import LogosContainer from "../components/LogosContainer";
import CardInput from "../components/CardInput";
import UnusedNodes from "../components/UnusedNodes";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="desktop-child" />
      <CardInputGroup />
      <LogosContainer />
      <CardInput />
      <UnusedNodes />
      <FrameComponent />
      <img className="tabs-bar-icon" alt="" src="/tabsbar@2x.png" />
      <Footer />
    </div>
  );
};

export default Desktop;
