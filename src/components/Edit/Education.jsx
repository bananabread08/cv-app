import React from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  StyledBtn,
} from '../styles/shared/sharedStyle';

export default function Education(props) {
  /* const init = {school: 'University of London',
  gradDate: '2021',
  course: 'Juris Doctor',} 
  */

  return (
    <StyledSection>
      <StyledForm>
        <StyledBtn onClick={props.deleteEducation}>Remove</StyledBtn>
        <InputContainer>
          <label>School:</label>
          <StyledInput
            type="text"
            placeholder="University of the Philippines"
            name="school"
            className="education"
            value={props.school.school}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>End Year:</label>
          <StyledInput
            type="number"
            name="gradDate"
            className="education"
            placeholder="2022"
            min={1950}
            max={2030}
            value={props.school.gradDate}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Course:</label>
          <StyledInput
            type="text"
            placeholder="Course (if applicable) i.e Biology"
            name="course"
            className="education"
            value={props.school.course}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
      </StyledForm>
    </StyledSection>
  );
}
