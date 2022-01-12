import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid white;
  width: 95vw;
`;

const SubmitBtn = styled.button`
  cursor: pointer;
  background-color: #1976d2;
  color: #fff;
  padding: 4px 16px;
  min-width: 64px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  border-radius: 15px 15px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  &:hover {
    background-color: #2268ad;
  }
`;
const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  &:focus {
    border: 2px solid #7167c7;
    margin: -1px 0 -1px 0; // so element sibling won't move due to margin displacement
  }
  width: 50vw;
`;

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  resize: none;
  &:focus {
    border: 2px solid #7167c7;
    margin: -1px 0 -1px 0;
  }
  width: 50vw;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    display: inline-block;
    width: 150px;
    text-align: end;
    padding-right: 5px;
    flex-basis: 35%;
    font-weight: 700;
  }
`;

export default function GenInfo() {
  const [GenInfoValues, setGenInfoValues] = useState({
    name: 'Phoenix Wright',
    role: 'Defense Attorney',
    contact: '0912334555466',
    address: 'Wright Anything Agency, Los Angeles',
    email: 'theaceattorney12#@gmail.com',
    site: 'https://github.com/daphoenix12#',
    isEditOn: false,
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
            placeholder="+6391612345678"
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
            Rows="2"
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
