import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  width: 40%;
  &:focus {
    border: 2px solid black;
    margin: -1px;
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
    <section>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Name.."
          name="name"
          onChange={handleChange}
        ></StyledInput>
        <StyledInput
          type="text"
          placeholder="Role.."
          name="role"
          onChange={handleChange}
        ></StyledInput>
        <StyledInput
          type="number"
          placeholder="Contact Number.."
          name="contact"
          onChange={handleChange}
        ></StyledInput>
        <StyledInput
          type="text"
          placeholder="Address.."
          name="address"
          onChange={handleChange}
        ></StyledInput>
        <StyledInput
          type="email"
          placeholder="Email Address.."
          name="email"
          onChange={handleChange}
        ></StyledInput>
        <StyledInput
          type="text"
          placeholder="Website (if any).."
          name="site"
          onChange={handleChange}
        ></StyledInput>
        <input className="Submit-btn" type="submit" value="Submit" />
      </StyledForm>
    </section>
  );
}
