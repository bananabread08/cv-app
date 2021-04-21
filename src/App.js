import React, { Component } from "react";
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';


class App extends Component {
  render(){
      return (
        <div className="App">
          <GeneralInfo />
          <hr />
          <Education />
          <hr />
          <Experience />
        </div>
      )   
  }
}

export default App;