import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Portfolio } from "./components/Portfolio/Portfolio";
import "./App.css";

export const App = () => {
  return (
    <>
      <Layout />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};
