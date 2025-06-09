import Main from "./sections/Main";
import Invite from "./sections/Invite";
import Timer from "./sections/Timer";
import Wishes from "./sections/Wishes";
import DressCode from "./sections/DressCode/DressCode";
import Final from "./sections/Final";
import Details from "./sections/Details";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-in-out", 
      });
    });
  }, []);

  return (
    <>
      <Main />
      <Invite />
      <Timer />
      <Wishes />
      <DressCode />
      <Details />
      <Final />
    </>
  );
}

export default App;
