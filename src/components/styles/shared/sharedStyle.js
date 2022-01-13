import styled from 'styled-components';

const StyledSection = styled.section`
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #bfdcf5;
  border-radius: 20px;
  box-shadow: 1px 0px 12px 3px rgba(71, 63, 63, 0.43);
  -webkit-box-shadow: 1px 0px 12px 3px rgba(71, 63, 63, 0.43);
  -moz-box-shadow: 1px 0px 12px 3px rgba(71, 63, 63, 0.43);
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  font-size: 14px;
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
  border-radius: 15px;
  border: 1px solid transparent;
  &:focus {
    border: 2px solid #7167c7;
    margin: -1px 0 -1px 0; // so element sibling won't move due to margin displacement
  }
  width: 50vw;

  //remove arrows
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 15px;
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

export {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  StyledTextArea,
  SubmitBtn,
};
