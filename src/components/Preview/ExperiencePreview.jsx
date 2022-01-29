import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: left;
  margin-left: 40px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:nth-child(2) {
    margin-right: 40px;
  }
`;

const JobTitleCont = styled.p`
  margin-top: -10px;
`;
const DescriptionCont = styled.p`
  max-width: 95%;
`;

export default function ExperiencePreview(props) {
  return (
    <Wrapper>
      <h3>Work Experience</h3>
      {props.experienceList.map((exp) => (
        <div key={exp.id + exp.company}>
          <HeaderContainer>
            <h4>{exp.company}</h4>
            <p>
              {exp.startYear} - {exp.endYear}
            </p>
          </HeaderContainer>
          <JobTitleCont>{exp.jobTitle}</JobTitleCont>
          <DescriptionCont> {exp.jobDescription} </DescriptionCont>
        </div>
      ))}
    </Wrapper>
  );
}
