import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: left;
  margin-left: 40px;
`;

const SchoolContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-right: 40px;
  }
`;

const CourseP = styled.p`
  margin-top: -10px;
`;
export default function EducationPreview(props) {
  return (
    <Wrapper>
      <h3>Education</h3>
      {props.schoolList.map((school) => (
        <div key={school.id + school.gradDate}>
          <SchoolContainer>
            <h4>{school.school}</h4>
            {school.gradDate ? (
              <p>{school.startDate + '-' + school.gradDate}</p>
            ) : (
              <p>{school.startDate + '-XXXX'}</p>
            )}
          </SchoolContainer>
          {school.course && <CourseP> {school.course} </CourseP>}
        </div>
      ))}
    </Wrapper>
  );
}
