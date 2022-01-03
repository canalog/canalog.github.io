import React from "react";
import Header from "../components/Header/Header";
import Greeting from "./Greeting/Greeting";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";

const Main = () => {
  return (
    <div>
      <Header />
      <Greeting />
      <Skills />
      <Project />
    </div>
  );
};

export default Main;
