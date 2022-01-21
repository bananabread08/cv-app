import React, { useState } from 'react';
import GenInfo from './GenInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import uniqid from 'uniqid';
import { SubmitBtn } from './styles/shared/sharedStyle';

export default function Edit() {
  const [schoolList, setSchoolList] = useState([]);

  const addEducation = (e) => {
    let id = uniqid();
    e.preventDefault();
    setSchoolList((prevState) => prevState.concat(id));
  };

  const deleteEducation = (e, selectedIndex) => {
    e.preventDefault();
    const newArr = [...schoolList].filter(
      (e, index) => index !== selectedIndex
    );
    setSchoolList((prevState) => (prevState = newArr));
  };
  return (
    <>
      <h2>General Information</h2>
      <GenInfo />
      <h2>Education </h2>
      {schoolList.map((id, index) => (
        <Education
          key={id}
          id={id}
          deleteEducation={(e) => deleteEducation(e, index)}
        />
      ))}
      <SubmitBtn onClick={addEducation}>Add More</SubmitBtn>
      <h2>Experience</h2>
      <Experience />
      <h2>Skills</h2>
      <Skills />
    </>
  );
}
