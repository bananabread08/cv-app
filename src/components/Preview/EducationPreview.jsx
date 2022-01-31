import {
  Wrapper,
  HeaderContainer,
  StyledPara,
} from '../styles/shared/sharedStyle';

export default function EducationPreview(props) {
  return (
    <Wrapper>
      <h3>Education</h3>
      {props.schoolList.map((school) => (
        <div key={school.id + school.gradDate}>
          <HeaderContainer>
            <h4>{school.school}</h4>
            {school.gradDate ? (
              <p>
                {school.startDate} - {school.gradDate}
              </p>
            ) : (
              <p>{school.startDate + '-XXXX'}</p>
            )}
          </HeaderContainer>
          {school.course && <StyledPara> {school.course} </StyledPara>}
        </div>
      ))}
    </Wrapper>
  );
}
