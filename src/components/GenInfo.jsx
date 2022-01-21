import React, { useState } from 'react';
import {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  StyledTextArea,
  SubmitBtn,
} from './styles/shared/sharedStyle';

export default function GenInfo() {
  const [GenInfoValues, setGenInfoValues] = useState({
    name: '',
    role: '',
    contact: '',
    address: '',
    email: '',
    site: '',
  });

  const handleChange = (e) => {
    setGenInfoValues({
      ...GenInfoValues, //save the current state of  all values
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  const handleSubmit = (e) => {
    setGenInfoValues({
      ...GenInfoValues,
    });
    e.preventDefault();
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <label>Name:</label>
          <StyledInput
            type="text"
            placeholder="Juan E. Dela Cruz"
            name="name"
            value={GenInfoValues.name}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Role:</label>
          <StyledInput
            type="text"
            placeholder="Software Engineer"
            name="role"
            value={GenInfoValues.role}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Contact #:</label>
          <StyledInput
            type="number"
            placeholder="+639161234567"
            name="contact"
            value={GenInfoValues.contact}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Address:</label>
          <StyledTextArea
            type="text"
            placeholder="221B Baker Street, London, England"
            name="address"
            value={GenInfoValues.address}
            rows={3}
            onChange={handleChange}
          ></StyledTextArea>
        </InputContainer>
        <InputContainer>
          <label>Email Address:</label>
          <StyledInput
            type="email"
            placeholder="jedelacruz1@gmail.com"
            name="email"
            value={GenInfoValues.email}
            onChange={handleChange}
          ></StyledInput>
        </InputContainer>
        <InputContainer>
          <label>Website (if any):</label>
          <StyledInput
            type="url"
            placeholder="github.com/jedelacruz1"
            name="site"
            value={GenInfoValues.site}
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
