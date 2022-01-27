import styled from 'styled-components';

const StyledSection = styled.section`
  width: 95vw;
  margin: 10px auto;
  border-radius: 1em;
  border: 2px solid #fff;
  box-shadow: 1px 0px 12px 3px rgba(63, 63, 63, 0.43);
  -webkit-box-shadow: 1px 0px 12px 3px rgba(71, 63, 63, 0.43);
  -moz-box-shadow: 1px 0px 12px 3px rgba(71, 63, 63, 0.43);

  @media only screen and (min-width: 900px) {
    width: 40vw;
    margin-left: 10px;
  }
`;

const StyledForm = styled.form`
  padding: 1em;
  font-size: 14px;
  li + li {
    margin-top: 10px;
  }

  @media only screen and (min-width: 900px) {
    width: 40vw;
  }
`;

const StyledBtn = styled.button`
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#1976d2' : '#b43838')};
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
  margin-bottom: ${(props) => (props.primary ? '' : '10px')};
  &:hover {
    background-color: ${(props) => (props.primary ? '#2268ad' : '#881e1e')};
  }
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 1rem;
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

  @media only screen and (min-width: 900px) {
    width: 25vw;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 1rem;
  resize: none;
  &:focus {
    border: 2px solid #7167c7;
    margin: -1px 0 -1px 0;
  }
  width: 50vw;

  @media only screen and (min-width: 900px) {
    width: 25vw;
  }
`;

const InputContainer = styled.li`
  list-style: none;
  label {
    display: inline-block;
    width: 120px;
    text-align: right;
    padding-right: 5px;
    font-weight: 700;
  }
`;

export {
  StyledSection,
  StyledForm,
  InputContainer,
  StyledInput,
  StyledTextArea,
  StyledBtn,
};
