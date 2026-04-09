/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Scene from "./components/canvas/Scene";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <Layout>
      <Navbar />
      <Scene />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </Layout>
  );
}

