import GenInfo from './GenInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export default function Edit() {
  return (
    <>
      <h2>General Information</h2>
      <GenInfo />
      <h2>Education </h2>
      <Education />
      <h2>Experience</h2>
      <Experience />
      <h2>Skills</h2>
      <Skills />
    </>
  );
}
