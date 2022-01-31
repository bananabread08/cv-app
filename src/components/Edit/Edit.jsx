import React from 'react';
import GenInfo from './GenInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import AddIcon from '../../assets/add.png';
import { StyledBtn, StyledImg } from '../styles/shared/sharedStyle';

export default function Edit({
  schoolList,
  handleChange,
  addEducation,
  deleteEducation,
  genInfoValues,
  experienceList,
  addExperience,
  deleteExperience,
  skillValues,
}) {
  return (
    <div>
      <h2>General Information</h2>
      <GenInfo genInfoValues={genInfoValues} handleChange={handleChange} />
      <h2>Education </h2>
      {schoolList.map((school, i) => {
        return (
          <Education
            key={school.id}
            id={school.id}
            deleteEducation={(e) => deleteEducation(e, i)}
            school={school}
            handleChange={(e) => handleChange(e, i)}
          />
        );
      })}
      <StyledBtn onClick={addEducation} primary>
        <StyledImg src={AddIcon} alt="add-icon"></StyledImg>Add School
      </StyledBtn>
      <h2>Experience</h2>
      {experienceList.map((exp, index) => (
        <Experience
          key={exp.id}
          id={exp.id}
          exp={exp}
          deleteExperience={(e) => deleteExperience(e, index)}
          handleChange={(e) => handleChange(e, index)}
        />
      ))}
      <StyledBtn onClick={addExperience} primary>
        <StyledImg src={AddIcon} alt="add-icon"></StyledImg>Add Exp
      </StyledBtn>
      <h2>Skills</h2>
      <Skills skillValues={skillValues} handleChange={handleChange} />
    </div>
  );
}
