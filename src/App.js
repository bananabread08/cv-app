import React, { Component } from 'react';
import './styles/App.css';
import editIcon from './assets/edit.svg';
import addIcon from './assets/plus.svg';
import githubIcon from './assets/github-corner-right.svg';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import uniqid from 'uniqid';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      schoolList: [1],
      experienceList: [2],
      id: uniqid(),
    };
  }

  exportPdf = () => {
    const hide = document.querySelectorAll('.ToHide');
    hide.forEach((element) => {
      element.style.visibility = 'hidden';
    });
    html2canvas(document.querySelector('.App'), {}).then((canvas) => {
      //document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'in', [8.5, 11]); //set pdf size to 8.5in x 11in Portrait
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('CV.pdf');
    });
  };

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
        <div className="header">
          <button className="Export ToHide" onClick={this.exportPdf}>
            Export as PDF
          </button>
          <a href="https://github.com/bananabread08/cv-app">
            <img
              className="github ToHide"
              src={githubIcon}
              alt="GitHub link"
            ></img>
          </a>
        </div>
        <GeneralInfo editIcon={editIcon} />
        <hr />
        <h3 className="SectionLabels">
          Experience {''} {/*add space between text and icon*/}
          <img
            src={addIcon}
            alt="Add Experience"
            onClick={this.addExperience}
            className="addIcon ToHide"
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
            className="addIcon ToHide"
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
