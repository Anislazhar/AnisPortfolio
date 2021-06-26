import react from "../../assets/react.png";
import node from "../../assets/node.png";
import js from "../../assets/js.png";
import redux from "../../assets/redux.jpg";
import mongo from "../../assets/mongo.jpg";
import scss from "../../assets/sass.jpg";
import html from "../../assets/html.jpg";
import express from "../../assets/express.png";
import gatsby from "../../assets/gatsby.png";
import graphql from "../../assets/graphql.png";
import ttp from "../../assets/ttp.png";

export const THEMES = {
  gatsby: {
    backgroundImage: gatsby,
    linearGradient: createLinearGradient("#723F9A", "#222222"),
    primaryColor: "#723F9A",
    color: "#222222",
  },
  graphql: {
    backgroundImage: graphql,
    linearGradient: createLinearGradient("#B22884", "#222222"),
    primaryColor: "#B22884",
    color: "#222222",
  },
  ttp: {
    backgroundImage: ttp,
    linearGradient: createLinearGradient("#2E79C7", "#222222"),
    primaryColor: "#2E79C7",
    color: "#222222",
  },
  react: {
    backgroundImage: react,
    linearGradient: createLinearGradient("#61dafb", "#222222"),
    primaryColor: "#61dafb",
    color: "#222222",
  },
  mongo: {
    backgroundImage: mongo,
    linearGradient: createLinearGradient("#49D191", "#33475F"),
    primaryColor: "#49D191",
    color: "#49D191",
  },
  node: {
    backgroundImage: node,
    linearGradient: createLinearGradient("#80BD01", "#333333"),
    primaryColor: "#80BD01",
    color: "#80BD01",
  },
  express: {
    backgroundImage: express,
    linearGradient: createLinearGradient("#80BD01", "#333333"),
    primaryColor: "#333333",
    color: "#80BD01",
  },
  javascript: {
    backgroundImage: js,
    linearGradient: createLinearGradient("#F7E018", "#000000"),
    primaryColor: "#F7E018",
    color: "#000000",
  },
  redux: {
    backgroundImage: redux,
    linearGradient: createLinearGradient("#764ABD", "#1E1E1E"),
    primaryColor: "#764ABD",
    color: "#1E1E1E",
  },
  scss: {
    backgroundImage: scss,
    linearGradient: createLinearGradient("#F80090", "#242A31"),
    primaryColor: "#F80090",
    color: "#242A31",
  },
  html: {
    backgroundImage: html,
    linearGradient: createLinearGradient("#FF7E00", "#242A31"),
    primaryColor: "#FF7E00",
    color: "#242A31",
  },
};

function createLinearGradient(color1, color2) {
  return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
