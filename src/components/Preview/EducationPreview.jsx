export default function EducationPreview({ schoolList }) {
  return (
    <div>
      <h3>Education</h3>
      {schoolList.map((school) => (
        <div key={school.id + school.year}>
          <div>{school.school}</div>
          <div>{school.gradDate}</div>
          {school.course && <div> {school.course} </div>}
        </div>
      ))}
    </div>
  );
}
