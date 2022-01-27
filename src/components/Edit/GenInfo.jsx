import React from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  StyledTextArea,
} from '../styles/shared/sharedStyle';

export default function GenInfo({ genInfoValues, handleChange }) {
  return (
    <StyledSection>
      <StyledForm>
        <ul>
          <InputContainer>
            <label>Name:</label>
            <StyledInput
              type="text"
              placeholder="Juan E. Dela Cruz"
              name="name"
              className="gen-info"
              value={genInfoValues.name}
              onChange={handleChange}
            ></StyledInput>
          </InputContainer>
          <InputContainer>
            <label>Role:</label>
            <StyledInput
              type="text"
              placeholder="Software Engineer"
              name="role"
              className="gen-info"
              value={genInfoValues.role}
              onChange={handleChange}
            ></StyledInput>
          </InputContainer>
          <InputContainer>
            <label>Contact #:</label>
            <StyledInput
              type="number"
              placeholder="+639161234567"
              name="contact"
              className="gen-info"
              value={genInfoValues.contact}
              onChange={handleChange}
            ></StyledInput>
          </InputContainer>
          <InputContainer>
            <label>Address:</label>
            <StyledTextArea
              type="text"
              placeholder="221B Baker Street, London, England"
              name="address"
              className="gen-info"
              value={genInfoValues.address}
              rows={2}
              onChange={handleChange}
            ></StyledTextArea>
          </InputContainer>
          <InputContainer>
            <label>Email:</label>
            <StyledInput
              type="email"
              placeholder="jedelacruz1@gmail.com"
              name="email"
              className="gen-info"
              value={genInfoValues.email}
              onChange={handleChange}
            ></StyledInput>
          </InputContainer>
          <InputContainer>
            <label>Website:</label>
            <StyledInput
              type="url"
              placeholder="github.com/jedelacruz1"
              name="site"
              className="gen-info"
              value={genInfoValues.site}
              onChange={handleChange}
            ></StyledInput>
          </InputContainer>
        </ul>
      </StyledForm>
    </StyledSection>
  );
}
