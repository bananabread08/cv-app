import './App.css';
import GenInfo from './components/GenInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <h2>General Information</h2>
      <GenInfo />
      <h2>Education</h2>
      <Education />
      <h2>Experience</h2>
      <Experience />
    </div>
  );
}

export default App;
