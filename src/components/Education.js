import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/Education.css';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: 'School/University Name',
      gradDate: 'Graduation Year, if applicable',
      course: 'Course, if Tertiary Education',
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
    const { school, gradDate, course, isEditOn } = this.state;
    return (
      <div>
        {isEditOn ? (
          <section className="Education">
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="outlined-basic"
                label="School..."
                variant="outlined"
                name="school"
                value={school}
                onChange={this.handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Course..."
                variant="outlined"
                name="course"
                value={course}
                onChange={this.handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Graduation Date..."
                variant="outlined"
                name="gradDate"
                value={gradDate}
                onChange={this.handleChange}
              />
              <input type="submit" value="Submit" />
            </form>
          </section>
        ) : (
          <div className="EducationPreview">
            <img
              src={this.props.editIcon}
              alt="Edit"
              className="EditIcon"
              onClick={this.handleSubmit}
            ></img>
            <h3>{school}</h3>
            {course && <p>{course}</p>}
            {gradDate && <p>{gradDate}</p>}
          </div>
        )}
      </div>
    );
  }
}
