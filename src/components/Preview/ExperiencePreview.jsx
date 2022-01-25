export default function ExperiencePreview(props) {
  return (
    <div>
      <h3>Work Experience</h3>
      {props.experienceList.map((exp) => (
        <div key={exp.id + exp.company}>
          <div>{exp.company}</div>
          <div>{exp.jobTitle}</div>
          <div>{exp.startYear}</div>
          <div>{exp.endYear}</div>
          <div> {exp.jobDescription} </div>
        </div>
      ))}
    </div>
  );
}
