import React, { useState } from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledTextArea,
  SubmitBtn,
} from './styles/shared/sharedStyle';

export default function Skills() {
  const [SkillValues, setSkillValues] = useState({
    skill: 'HTML-CSS-JavaScript-Webpack-ReactJS-MySQL-OOP',
  });
  const handleChange = (e) => {
    setSkillValues({
      ...SkillValues,
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };
  const handleSubmit = (e) => {
    setSkillValues({
      ...SkillValues,
    });
    e.preventDefault();
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <label>Skills:</label>
          <StyledTextArea
            type="text"
            placeholder="HTML-CSS-JavaScript-ReactJS-MongoDB-Express-NodeJS"
            name="skill"
            value={SkillValues.skill}
            rows={2}
            onChange={handleChange}
          ></StyledTextArea>
        </InputContainer>

        <SubmitBtn type="submit" value="Submit">
          Submit
        </SubmitBtn>
      </StyledForm>
    </StyledSection>
  );
}
