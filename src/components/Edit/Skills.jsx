import React from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledTextArea,
} from '../styles/shared/sharedStyle';

export default function Skills({ skillValues, handleChange }) {
  return (
    <StyledSection>
      <StyledForm>
        <InputContainer>
          <label>Skills:</label>
          <StyledTextArea
            type="text"
            placeholder="HTML-CSS-JavaScript-ReactJS-MongoDB-Express-NodeJS"
            name="skill"
            className="skill"
            value={skillValues.skill}
            rows={2}
            onChange={handleChange}
          ></StyledTextArea>
        </InputContainer>
      </StyledForm>
    </StyledSection>
  );
}
