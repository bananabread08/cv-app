import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/Education.css';

const Education = (props) => {
  const [EducationValues, setEducationValues] = useState({
    school: 'School/University Name',
    gradDate: 'Graduation Year, if applicable',
    course: 'Course, if Tertiary Education',
    isEditOn: false,
  });
  const handleChange = (e) => {
    setEducationValues({
      ...EducationValues,
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };
  const handleSubmit = (e) => {
    setEducationValues({
      ...EducationValues,
      isEditOn: !EducationValues.isEditOn,
    });
    e.preventDefault();
  };

  return (
    <div>
      {EducationValues.isEditOn ? (
        <section className="Education">
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="School..."
              variant="outlined"
              name="school"
              value={EducationValues.school}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Course..."
              variant="outlined"
              name="course"
              value={EducationValues.course}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Graduation Year..."
              variant="outlined"
              name="gradDate"
              value={EducationValues.gradDate}
              onChange={handleChange}
            />
            <input className="Submit-btn" type="submit" value="Submit" />
          </form>
        </section>
      ) : (
        <div className="EducationPreview">
          <img
            src={props.editIcon}
            alt="Edit"
            className="EditIcon ToHide"
            onClick={handleSubmit}
          ></img>
          <h3>{EducationValues.school}</h3>
          {EducationValues.course && <p>{EducationValues.course}</p>}
          {EducationValues.gradDate && <p>{EducationValues.gradDate}</p>}
        </div>
      )}
    </div>
  );
};
export default Education;
