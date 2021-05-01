import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = (props) => {
  const [SkillValues, setSkillValues] = useState({
    skill: 'HTML-CSS-JavaScript-Webpack-ReactJS-MySQL-OOP',
    isEditOn: false,
  });
  const handleChange = (e) => {
    setSkillValues({
      ...SkillValues,
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };
  const handleSubmit = (e) => {
    setSkillValues({
      ...SkillValues,
      isEditOn: !SkillValues.isEditOn,
    });
    e.preventDefault();
  };
  return (
    <div>
      {SkillValues.isEditOn ? (
        <section className="Skills">
          <h3 className="SectionLabelsSkill">Skills</h3>
          <form onSubmit={handleSubmit}>
            <textarea
              name="skill"
              value={SkillValues.skill}
              maxLength="70"
              onChange={handleChange}
            ></textarea>
            <input className="Submit-btn" type="submit" value="Submit" />
          </form>
        </section>
      ) : (
        <div className="SkillsPreview">
          <img
            src={props.editIcon}
            alt="Edit"
            className="EditIcon ToHide"
            onClick={handleSubmit}
          ></img>
          <h3 className="SectionLabelsSkill">Skills</h3>
          <p>{SkillValues.skill}</p>
        </div>
      )}
    </div>
  );
};
export default Skills;
