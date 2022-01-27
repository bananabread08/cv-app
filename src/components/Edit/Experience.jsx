import React from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  StyledTextArea,
  StyledBtn,
} from '../styles/shared/sharedStyle';

export default function Experience(props) {
  return (
    <StyledSection>
      <StyledForm>
        <StyledBtn onClick={props.deleteExperience}>Remove</StyledBtn>
        <InputContainer>
          <label>Company:</label>
          <StyledInput
            type="text"
            placeholder="Themis Law Firm"
            name="company"
            className="exp"
            value={props.exp.company}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Job Title:</label>
          <StyledInput
            type="text"
            placeholder="Prosecutor"
            name="jobTitle"
            className="exp"
            value={props.exp.jobTitle}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Start Year:</label>
          <StyledInput
            type="number"
            name="startYear"
            className="exp"
            placeholder="2015"
            min={1950}
            max={2030}
            value={props.exp.startYear}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>End Year:</label>
          <StyledInput
            type="number"
            name="endYear"
            className="exp"
            placeholder="2022"
            min={1950}
            max={2030}
            value={props.exp.endYear}
            onChange={props.handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Job Description:</label>
          <StyledTextArea
            type="text"
            placeholder="Provided counsel and represented businesses, individuals, and government agencies in legal matters and disputes of any kind."
            name="jobDescription"
            className="exp"
            value={props.exp.jobDescription}
            rows={5}
            onChange={props.handleChange}
          ></StyledTextArea>
        </InputContainer>
      </StyledForm>
    </StyledSection>
  );
}
