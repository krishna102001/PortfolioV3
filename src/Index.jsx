import { Home } from "./components/Home";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Blog } from "./components/Blog";
import { Projects } from "./components/Projects";
export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Blog />
    </>
  );
}
