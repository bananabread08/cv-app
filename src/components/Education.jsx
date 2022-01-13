import React, { useState } from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  SubmitBtn,
} from './styles/shared/sharedStyle';

export default function Education() {
  const [EducationValues, setEducationValues] = useState({
    school: 'University of London',
    gradDate: '2021',
    course: 'Juris Doctor',
  });

  const handleChange = (e) => {
    setEducationValues({
      ...EducationValues,
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  const handleSubmit = (e) => {
    setEducationValues({
      ...EducationValues,
    });
    e.preventDefault();
  };
  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <label>School/University:</label>
          <StyledInput
            type="text"
            placeholder="University of the Philippines"
            name="school"
            value={EducationValues.school}
            onChange={handleChange}
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
            value={EducationValues.gradDate}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Course:</label>
          <StyledInput
            type="text"
            placeholder="Course (if applicable) i.e Biology"
            name="course"
            value={EducationValues.course}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <SubmitBtn type="submit" value="Submit">
          Submit
        </SubmitBtn>
      </StyledForm>
    </StyledSection>
  );
}
