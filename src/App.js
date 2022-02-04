import React, { useState, useRef } from 'react';
import './components/styles/App.css';
import Edit from './components/Edit/Edit';
import Preview from './components/Preview/Preview';
import Navbar from './components/Navbar';
import uniqid from 'uniqid';
import { useReactToPrint } from 'react-to-print';

function App() {
  const [genInfoValues, setGenInfoValues] = useState({
    name: 'Phoenix Wright',
    role: 'Software Engineer',
    contact: 9984057931,
    address: '#35 Bil-loca, Batac City, Ilocos Norte, Philippines ',
    email: 'imalwayswright08@gmail.com',
    site: 'https://github.com/bananabread08',
  });

  const [schoolList, setSchoolList] = useState([
    {
      school: 'Themis Law School',
      startDate: '2005',
      gradDate: '2009',
      course: 'Juris Doctor',
      id: 'abc',
    },
    {
      school: 'University of the Themis',
      startDate: '2005',
      gradDate: '2009',
      course: 'BS Psychology',
      id: 'cdf',
    },
    {
      school: 'Themis Science High School, North Region Campus',
      startDate: '2001',
      gradDate: '2005',
      course: '',
      id: 'cdo',
    },
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
    {
      company: 'Google',
      jobTitle: 'Software Engineer',
      startYear: 2011,
      endYear: 2021,
      jobDescription:
        'Build highly scalable and reusable front-end codes for customers. Worked collaboratively and supervised a young team to make innovative products and design.',
      id: 'a11yS',
    },
  ]);

  const [skillValues, setSkillValues] = useState({
    skill: 'HTML-CSS-JavaScript-Webpack-ReactJS-MySQL-OOP',
  });

  const onChangeHelper = (e, prevState, index) => {
    const selected = [...prevState].find((el, i) => i === index);
    let items = [...prevState];
    items[index] = { ...selected, [e.target.name]: e.target.value };
    return items;
  };

  const deleteHelper = (e, selectedIndex, list) => {
    const newArr = [...list].filter((e, index) => index !== selectedIndex);
    return newArr;
  };

  const handleChange = (e, index) => {
    if (e.target.classList.contains('gen-info')) {
      setGenInfoValues({ ...genInfoValues, [e.target.name]: e.target.value });
    }
    if (e.target.classList.contains('education')) {
      setSchoolList(
        (prevState) => (prevState = onChangeHelper(e, prevState, index))
      );
    }
    if (e.target.classList.contains('exp')) {
      setExperienceList(
        (prevState) => (prevState = onChangeHelper(e, prevState, index))
      );
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
        startDate: '',
        gradDate: '',
        course: '',
        id: id,
      })
    );
    e.preventDefault();
  };

  const deleteEducation = (e, selectedIndex) => {
    e.preventDefault();
    const copy = [...schoolList];
    setSchoolList(
      (prevState) => (prevState = deleteHelper(e, selectedIndex, copy))
    );
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
    const copy = [...experienceList];
    setExperienceList(
      (prevState) => (prevState = deleteHelper(e, selectedIndex, copy))
    );
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <Navbar handlePrint={handlePrint} />
      <div className="main-content">
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
          ref={componentRef}
          schoolList={schoolList}
          genInfoValues={genInfoValues}
          experienceList={experienceList}
          skillValues={skillValues}
        />
      </div>
    </div>
  );
}

export default App;
