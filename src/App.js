import React, { Component } from "react";
import './styles/App.css';
import editIcon from './assets/edit.svg';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import SKills from './components/Skills'


class App extends Component {
  render(){
      return (
        <div className="App">
          <GeneralInfo editIcon={editIcon}/>
          <hr />
          <Education editIcon={editIcon}/>
          <hr />
          <Experience editIcon={editIcon}/>
          <hr/>
          <SKills editIcon={editIcon}/>
        </div>
      )   
  }
}

export default App;