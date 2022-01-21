import React, { useState } from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  StyledTextArea,
  SubmitBtn,
} from './styles/shared/sharedStyle';
import styled from 'styled-components';

const DeleteBtn = styled(SubmitBtn)`
  background-color: red;

  &:hover {
    background-color: #b43838;
  }
`;

export default function Experience(props) {
  // const initial = {company: 'Wright and Co. Law Offices',
  // jobTitle: 'Attorney at Law',
  // startYear: 2015,
  // endYear: 2020,
  // jobDescription:
  //   'Build highly scalable and reusable front-end codes for customers. Worked collaboratively and supervised a young team to make innovative products and design.',};
  const [ExperienceValues, setExperienceValues] = useState({
    company: '',
    jobTitle: '',
    startYear: '',
    endYear: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    setExperienceValues({
      ...ExperienceValues,
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  const handleSubmit = (e) => {
    setExperienceValues({
      ...ExperienceValues,
    });
    e.preventDefault();
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit}>
        <DeleteBtn onClick={props.deleteExperience}>Delete</DeleteBtn>
        <InputContainer>
          <label>Company:</label>
          <StyledInput
            type="text"
            placeholder="Themis Law Firm"
            name="company"
            value={ExperienceValues.company}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Job Title:</label>
          <StyledInput
            type="text"
            placeholder="Prosecutor"
            name="jobTitle"
            value={ExperienceValues.jobTitle}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Start Year:</label>
          <StyledInput
            type="number"
            name="startYear"
            placeholder="2015"
            min={1950}
            max={2030}
            value={ExperienceValues.startYear}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>End Year:</label>
          <StyledInput
            type="number"
            name="endYear"
            placeholder="2022"
            min={1950}
            max={2030}
            value={ExperienceValues.endYear}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Job Description:</label>
          <StyledTextArea
            type="text"
            placeholder="Provided counsel and represented businesses, individuals, and government agencies in legal matters and disputes of any kind."
            name="jobDescription"
            value={ExperienceValues.jobDescription}
            rows={5}
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
