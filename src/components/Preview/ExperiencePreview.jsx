import styled from 'styled-components';
import {
  Wrapper,
  HeaderContainer,
  StyledPara,
} from '../styles/shared/sharedStyle';

const StyledHeader = styled(HeaderContainer)`
  p:nth-child(2) {
    margin-right: 40px;
  }
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
          <StyledHeader>
            <h4>{exp.company}</h4>
            <p>
              {exp.startYear} - {exp.endYear}
            </p>
          </StyledHeader>
          <StyledPara>{exp.jobTitle}</StyledPara>
          <DescriptionCont> {exp.jobDescription} </DescriptionCont>
        </div>
      ))}
    </Wrapper>
  );
}
