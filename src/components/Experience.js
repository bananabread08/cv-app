import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/Experience.css';

const Experience = (props) => {
  const [ExperienceValues, setExperienceValues] = useState({
    company: 'Place of Work',
    jobTitle: 'Job Title/Position',
    startYear: 'Year Started',
    endYear: 'Year Ended',
    jobDescription:
      'A brief description of your Role/Position in the Company. i.e "Build highly scalable and reusable front-end codes for customers. Worked collaboratively and supervised a young team to make innovative products and design".',
    isEditOn: false,
  });

  const handleChange = (e) => {
    setExperienceValues({
      ...ExperienceValues,
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  const handleSubmit = (e) => {
    setExperienceValues({
      ...ExperienceValues,
      isEditOn: !ExperienceValues.isEditOn,
    });
    e.preventDefault();
  };

  return (
    <div>
      {ExperienceValues.isEditOn ? (
        <section className="Experience">
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                id="outlined-basic"
                label="Company Name..."
                variant="outlined"
                name="company"
                value={ExperienceValues.company}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Job Title..."
                variant="outlined"
                name="jobTitle"
                value={ExperienceValues.jobTitle}
                onChange={handleChange}
              />
              <TextField
                id="StartYear"
                label="Year Started..."
                variant="outlined"
                name="startYear"
                value={ExperienceValues.startYear}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="EndYear"
                label="Year Ended..."
                variant="outlined"
                name="endYear"
                value={ExperienceValues.endYear}
                onChange={handleChange}
              />
              <textarea
                id="outlined-basic"
                label="Job Description..."
                name="jobDescription"
                value={ExperienceValues.jobDescription}
                maxLength="250"
                onChange={handleChange}
              />
            </div>
            <input className="Submit-btn" type="submit" value="Submit" />
          </form>
        </section>
      ) : (
        <div className="ExperiencePreview">
          <img
            src={props.editIcon}
            alt="Edit"
            className="EditIcon ToHide"
            onClick={handleSubmit}
          ></img>
          <div className="CompanyDeets">
            <h3>{ExperienceValues.company}</h3>
            <p>{ExperienceValues.jobTitle}</p>
            <p>
              [{ExperienceValues.startYear}-{ExperienceValues.endYear}]
            </p>
          </div>
          <div>{ExperienceValues.jobDescription}</div>
        </div>
      )}
    </div>
  );
};
export default Experience;
