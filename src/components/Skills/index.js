import React, { useContext } from "react";
import "./index.scss";
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
  const {
    changeTheme,
    startThemeChangeTimer,
    stopThemeChangeTimer,
  } = useContext(ThemeContext);

  function handleMouseEnter(e) {
    const type = e.nativeEvent.target.id;
    if (type) {
      changeTheme(type);
    }
  }

  return (
    <div className="skills">
      <h6>Skills</h6>
      <ul
        onMouseEnter={stopThemeChangeTimer}
        onMouseLeave={startThemeChangeTimer}
        onMouseOver={handleMouseEnter}
      >
        <li id="html">Html</li>
        <li id="scss">Css/Sass</li>
        <li id="javascript">JavaScript</li>
        <li id="ttp">TypeScript</li>
        <li id="react">React</li>
        <li id="redux">Redux</li>
        <li id="node">Node</li>
        <li id="express">Express</li>
        <li id="mongo">MongoDb</li>
        <li id="gatsby">Gatsby</li>
        <li id="graphql">GraphQL</li>
      </ul>
    </div>
  );
};

export default Skills;
