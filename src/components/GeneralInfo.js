import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/GeneralInfo.css';

const GeneralInfo = (props) => {
  const [GenInfoValues, setGenInfoValues] = useState({
    name: 'Phoenix Wright',
    role: 'Defense Attorney',
    contact: '0912334555466',
    email: 'theaceattorney12#@gmail.com',
    site: 'https://github.com/daphoenix12#',
    isEditOn: false,
  });

  const handleChange = (e) => {
    setGenInfoValues({
      ...GenInfoValues, //save the current state of  all values
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  const handleSubmit = (e) => {
    setGenInfoValues({
      ...GenInfoValues,
      isEditOn: !GenInfoValues.isEditOn,
    });
    e.preventDefault();
  };

  return (
    <div>
      {GenInfoValues.isEditOn ? (
        <section className="GeneralInfo">
          <h3 className="SectionLabels">General Information</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                id="GiName"
                label="Name..."
                variant="outlined"
                name="name"
                value={GenInfoValues.name}
                onChange={handleChange}
              />
              <TextField
                id="GiRole"
                label="Role/Position..."
                variant="outlined"
                name="role"
                value={GenInfoValues.role}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="GiContact"
                label="Contact#..."
                variant="outlined"
                name="contact"
                type="number"
                value={GenInfoValues.contact}
                onChange={handleChange}
              />
              <TextField
                id="GiEmail"
                label="Email Address..."
                variant="outlined"
                type="email"
                name="email"
                value={GenInfoValues.email}
                onChange={handleChange}
              />
              <TextField
                id="GiSite"
                label="Website..."
                variant="outlined"
                name="site"
                value={GenInfoValues.site}
                onChange={handleChange}
              />
            </div>
            <input className="Submit-btn" type="submit" value="Submit" />
          </form>
        </section>
      ) : (
        <div className="GeneralInfoPreview">
          <img
            src={props.editIcon}
            alt="Edit"
            className="EditIcon ToHide"
            onClick={handleSubmit}
          ></img>
          <div>
            <h2>{GenInfoValues.name}</h2>
            <h4>{GenInfoValues.role}</h4>
          </div>
          <div>
            <p>Contact#: {GenInfoValues.contact}</p>
            <p>Email: {GenInfoValues.email}</p>
            {GenInfoValues.site && (
              <p>
                Site: <a href={GenInfoValues.site}>{GenInfoValues.site}</a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
