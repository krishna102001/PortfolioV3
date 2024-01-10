import { Home } from "./components/Home";
import { Achievements } from "./components/Achievements";
import { Blog } from "./components/Blog";
import Footer from "./components/Footer"
import { Projects } from "./components/Projects";
export default function Index() {
  return (
    <>
      <Home />
      <Projects />
      {/* <Achievements /> */}
      {/* <Blog /> */}
      <Footer />
    </>
  );
}
