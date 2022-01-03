import React from "react";
import "./Skills.scss";
import { skills } from "../../portfolio";

const Skills = () => {
  return (
    <div className="skills-main">
      <h1 className="skills-title">Skills</h1>
      <ul className="skills-list">
        {skills.map((skills, id) => {
          return (
            <li key={id} className="skills-info" name={skills.skillName}>
              <i className={skills.iconClassName} />
              <p>{skills.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
