import React, { Component } from 'react';
import './styles/App.css';
import editIcon from './assets/edit.svg';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import uniqid from 'uniqid';

class App extends Component {
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
      <div className='App'>
        <GeneralInfo editIcon={editIcon} />
        <hr />
        <div>
          <button onClick={this.addEducation}>Add</button>
          Education
          {schoolList.map((schoolID) => {
            return (
              <Education key={schoolID} id={schoolID} editIcon={editIcon} />
            );
          })}
        </div>
        <hr />
        <div>
          <button onClick={this.addExperience}>Add</button>
          Experience
          {experienceList.map((expID) => {
            return <Experience key={expID} id={expID} editIcon={editIcon} />;
          })}
        </div>
        <hr />
        <Skills editIcon={editIcon} />
      </div>
    );
  }
}

export default App;
