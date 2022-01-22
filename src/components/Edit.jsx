import React, { useState } from 'react';
import GenInfo from './GenInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import uniqid from 'uniqid';
import { SubmitBtn } from './styles/shared/sharedStyle';

export default function Edit() {
  const [schoolList, setSchoolList] = useState([
    { school: 'UPD', gradDate: '2012', course: 'BS ME', id: 'abc' },
    { school: 'PSHS', gradDate: '2013', course: 'N/A', id: 'cdo' },
  ]);
  const [experienceList, setExperienceList] = useState([]);

  const handleChange = (e, index) => {
    setSchoolList((prevState) => {
      const selected = [...prevState].find((el, i) => i === index);
      let items = [...prevState];
      items[index] = { ...selected, [e.target.name]: e.target.value };
      return (prevState = items);
    });
  };

  const addEducation = (e) => {
    let id = uniqid();
    setSchoolList((prevState) =>
      prevState.concat({
        school: '',
        gradDate: '',
        course: '',
        id: id,
      })
    );
    e.preventDefault();
  };

  const deleteEducation = (e, selectedIndex) => {
    e.preventDefault();
    const newArr = [...schoolList].filter(
      (e, index) => index !== selectedIndex
    );
    setSchoolList((prevState) => (prevState = newArr));
  };

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
      <GenInfo />
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
