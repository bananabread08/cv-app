import React, { Component } from 'react';
import '../styles/Skills.css';

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: 'HTML-CSS-JavaScript-Webpack-ReactJS-MySQL-OOP',
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
      skill: this.state.skill,
      isEditOn: !this.state.isEditOn,
    });
    e.preventDefault();
  };

  render() {
    const { skill, isEditOn } = this.state;
    if (isEditOn) {
      return (
        <section className="Skills">
          <h3 className="SectionLabelsSkill">Skills</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea
              name="skill"
              value={skill}
              onChange={this.handleChange}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </section>
      );
    } else {
      return (
        <div className="SkillsPreview">
          <img
            src={this.props.editIcon}
            alt="Edit"
            className="EditIcon"
            onClick={this.handleSubmit}
          ></img>
          <h3 className="SectionLabelsSkill">Skills</h3>
          <p>{skill}</p>
        </div>
      );
    }
  }
}
