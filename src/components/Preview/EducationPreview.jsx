export default function EducationPreview(props) {
  return (
    <div>
      <h3>Education</h3>
      {props.schoolList.map((school) => (
        <div key={school.id + school.gradDate}>
          <div>{school.school}</div>
          <div>{school.gradDate}</div>
          {school.course && <div> {school.course} </div>}
        </div>
      ))}
    </div>
  );
}
