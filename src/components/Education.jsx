import React from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  SubmitBtn,
} from './styles/shared/sharedStyle';
import styled from 'styled-components';

const DeleteBtn = styled(SubmitBtn)`
  background-color: red;

  &:hover {
    background-color: #b43838;
  }
`;
export default function Education(props) {
  /* const init = {school: 'University of London',
  gradDate: '2021',
  course: 'Juris Doctor',} 
  */

  return (
    <StyledSection>
      <StyledForm>
        <DeleteBtn onClick={props.deleteEducation}>Delete</DeleteBtn>
        <InputContainer>
          <label>School/University:</label>
          <StyledInput
            type="text"
            placeholder="University of the Philippines"
            name="school"
            value={props.school.school}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Graduation Year:</label>
          <StyledInput
            type="number"
            name="gradDate"
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
            value={props.school.course}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
      </StyledForm>
    </StyledSection>
  );
}
