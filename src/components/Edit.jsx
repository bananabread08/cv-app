import React, { useState } from 'react';
import GenInfo from './GenInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import uniqid from 'uniqid';
import { SubmitBtn } from './styles/shared/sharedStyle';

export default function Edit({
  schoolList,
  handleChange,
  addEducation,
  deleteEducation,
  genInfoValues,
}) {
  const [experienceList, setExperienceList] = useState([]);

  const addExperience = (e) => {
    e.preventDefault();
    setExperienceList((prevState) => prevState.concat(uniqid()));
  };

  const deleteExperience = (e, selectedIndex) => {
    e.preventDefault();
    const newArr = [...experienceList].filter(
      (e, index) => index !== selectedIndex
    );
    setExperienceList((prevState) => (prevState = newArr));
  };
  return (
    <>
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
      <SubmitBtn onClick={addEducation}>Add School</SubmitBtn>
      <h2>Experience</h2>
      {experienceList.map((id, index) => (
        <Experience
          key={id}
          id={id}
          deleteExperience={(e) => deleteExperience(e, index)}
        />
      ))}
      <SubmitBtn onClick={addExperience}>Add Exp</SubmitBtn>
      <h2>Skills</h2>
      <Skills />
    </>
  );
}
