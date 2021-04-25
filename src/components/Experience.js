import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/Experience.css';

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 'Place of Work',
      jobTitle: 'Job Title/Position',
      startYear: 'Year Started',
      endYear: 'Year Ended',
      jobDescription:
        'A brief description of your Role/Position in the Company. i.e "Build highly scalable and reusable front-end codes for customers. Worked collaboratively and supervised a young team to make innovative products and design".',
      isEditOn: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };
  handleSubmit = (e) => {
    this.setState({
      isEditOn: !this.state.isEditOn,
    });
    e.preventDefault();
  };

  render() {
    const {
      company,
      jobTitle,
      startYear,
      endYear,
      jobDescription,
      isEditOn,
    } = this.state;
    return (
      <div>
        {isEditOn ? (
          <section className="Experience">
            <form onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Company Name..."
                  variant="outlined"
                  name="company"
                  value={company}
                  onChange={this.handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Job Title..."
                  variant="outlined"
                  name="jobTitle"
                  value={jobTitle}
                  onChange={this.handleChange}
                />
                <TextField
                  id="StartYear"
                  label="Year Started..."
                  variant="outlined"
                  name="startYear"
                  value={startYear}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <TextField
                  id="EndYear"
                  label="Year Ended..."
                  variant="outlined"
                  name="endYear"
                  value={endYear}
                  onChange={this.handleChange}
                />
                <textarea
                  id="outlined-basic"
                  label="Job Description..."
                  name="jobDescription"
                  value={jobDescription}
                  maxLength="250"
                  onChange={this.handleChange}
                />
              </div>
              <input className="Submit-btn" type="submit" value="Submit" />
            </form>
          </section>
        ) : (
          <div className="ExperiencePreview">
            <img
              src={this.props.editIcon}
              alt="Edit"
              className="EditIcon ToHide"
              onClick={this.handleSubmit}
            ></img>
            <div className="CompanyDeets">
              <h3>{company}</h3>
              <p>{jobTitle}</p>
              <p>
                [{startYear}-{endYear}]
              </p>
            </div>
            <div>{jobDescription}</div>
          </div>
        )}
      </div>
    );
  }
}
