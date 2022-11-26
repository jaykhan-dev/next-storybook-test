/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Home from "../../pages/index";
import Three from "../../pages/three";
import About from "../../pages/about";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = () => <Home />;
export const AboutPage = () => <About />;
