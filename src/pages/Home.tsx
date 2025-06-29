import Layout from "../components/layout/Layout";
import AboutMe from "../components/sections/AboutMe";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
    </Layout>
  );
}
