import React, { useState } from 'react';
import './App.css';
import Edit from './components/Edit/Edit';
import Preview from './components/Preview/Preview';
import uniqid from 'uniqid';

function App() {
  const [genInfoValues, setGenInfoValues] = useState({
    name: 'a',
    role: 'b',
    contact: 997,
    address: '#35 Bil-loca',
    email: 'rmkfermmin@gmail.com',
    site: 'https://github.com',
  });

  const [schoolList, setSchoolList] = useState([
    { school: 'UPD', gradDate: '2012', course: 'BS ME', id: 'abc' },
    { school: 'PSHS', gradDate: '2013', course: 'N/A', id: 'cdo' },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      company: 'Wright and Co. Law Offices',
      jobTitle: 'Attorney at Law',
      startYear: 2015,
      endYear: 2020,
      jobDescription:
        'Build highly scalable and reusable front-end codes for customers. Worked collaboratively and supervised a young team to make innovative products and design.',
      id: 'a1235S',
    },
  ]);

  const [skillValues, setSkillValues] = useState({
    skill: 'HTML-CSS-JavaScript-Webpack-ReactJS-MySQL-OOP',
  });

  const handleChange = (e, index) => {
    if (e.target.classList.contains('gen-info')) {
      setGenInfoValues({ ...genInfoValues, [e.target.name]: e.target.value });
    }
    if (e.target.classList.contains('education')) {
      setSchoolList((prevState) => {
        const selected = [...prevState].find((el, i) => i === index);
        let items = [...prevState];
        items[index] = { ...selected, [e.target.name]: e.target.value };
        return (prevState = items);
      });
    }
    if (e.target.classList.contains('exp')) {
      setExperienceList((prevState) => {
        const selected = [...prevState].find((el, i) => i === index);
        let items = [...prevState];
        items[index] = { ...selected, [e.target.name]: e.target.value };
        return (prevState = items);
      });
    }
    if (e.target.classList.contains('skill')) {
      setSkillValues({ ...skillValues, [e.target.name]: e.target.value });
    }
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
    let id = uniqid();
    setExperienceList((prevState) =>
      prevState.concat({
        company: '',
        jobTitle: '',
        startYear: '',
        endYear: '',
        jobDescription: '',
        id: id,
      })
    );
    e.preventDefault();
  };

  const deleteExperience = (e, selectedIndex) => {
    e.preventDefault();
    const newArr = [...experienceList].filter(
      (e, index) => index !== selectedIndex
    );
    setExperienceList((prevState) => (prevState = newArr));
  };
  return (
    <div className="App">
      <Edit
        schoolList={schoolList}
        genInfoValues={genInfoValues}
        experienceList={experienceList}
        skillValues={skillValues}
        handleChange={handleChange}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
      />
      <Preview
        schoolList={schoolList}
        genInfoValues={genInfoValues}
        experienceList={experienceList}
        skillValues={skillValues}
      />
    </div>
  );
}

export default App;
