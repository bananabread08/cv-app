import React, { Component } from 'react';
import './styles/App.css';
import editIcon from './assets/edit.svg';
import addIcon from './assets/plus.svg';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import uniqid from 'uniqid';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      schoolList: [1],
      experienceList: [2],
      id: uniqid(),
    };
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      id: uniqid(),
      schoolList: this.state.schoolList.concat(this.state.id),
    });
  };
  addExperience = (e) => {
    e.preventDefault();
    this.setState({
      id: uniqid(),
      experienceList: this.state.experienceList.concat(this.state.id),
    });
  };
  render() {
    const { schoolList, experienceList } = this.state;
    return (
      <div className="App">
        <GeneralInfo editIcon={editIcon} />
        <hr />
        <h3 className="SectionLabels">
          Experience {''} {/*add space between text and icon*/}
          <img
            src={addIcon}
            alt="Add Experience"
            onClick={this.addExperience}
            className="addIcon"
          ></img>
        </h3>
        {experienceList.map((expID) => {
          return <Experience key={expID} id={expID} editIcon={editIcon} />;
        })}
        <hr />
        <h3 className="SectionLabels">
          Education {''}
          <img
            src={addIcon}
            alt="Add Education"
            onClick={this.addEducation}
            className="addIcon"
          ></img>
        </h3>
        {schoolList.map((schoolID) => {
          return <Education key={schoolID} id={schoolID} editIcon={editIcon} />;
        })}
        <hr />
        <Skills editIcon={editIcon} />
      </div>
    );
  }
}
