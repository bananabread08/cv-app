import React, { useState } from 'react';
import './App.css';
import Edit from './components/Edit';
import Preview from './components/Preview/Preview';
import uniqid from 'uniqid';

function App() {
  const [schoolList, setSchoolList] = useState([
    { school: 'UPD', gradDate: '2012', course: 'BS ME', id: 'abc' },
    { school: 'PSHS', gradDate: '2013', course: 'N/A', id: 'cdo' },
  ]);

  const [genInfoValues, setGenInfoValues] = useState({
    name: 'a',
    role: 'b',
    contact: 997,
    address: '#35 Bil-loca',
    email: 'rmkfermmin@gmail.com',
    site: 'https://github.com',
  });

  const handleChange = (e, index) => {
    if (e.target.classList.contains('education')) {
      setSchoolList((prevState) => {
        const selected = [...prevState].find((el, i) => i === index);
        let items = [...prevState];
        items[index] = { ...selected, [e.target.name]: e.target.value };
        return (prevState = items);
      });
    }
    if (e.target.classList.contains('gen-info')) {
      setGenInfoValues({ ...genInfoValues, [e.target.name]: e.target.value });
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
  return (
    <div className="App">
      <Edit
        schoolList={schoolList}
        genInfoValues={genInfoValues}
        handleChange={handleChange}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
      />
      <Preview schoolList={schoolList} genInfoValues={genInfoValues} />
    </div>
  );
}

export default App;
