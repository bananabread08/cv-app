import styled from 'styled-components';
import { StyledBtn } from './styles/shared/sharedStyle';
import ghIcon from '../assets/ghIcon-light.png';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 3px 7px 2px rgba(64, 61, 61, 0.6);
  -webkit-box-shadow: 0px 3px 7px 2px rgba(64, 61, 61, 0.6);
  -moz-box-shadow: 0px 3px 7px 2px rgba(64, 61, 61, 0.6);
  z-index: 1;
`;

const StyledHeader = styled.header`
  font-size: 20px;
`;
const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    margin: 0 20px;
  }

  img {
    margin-top: 5px;
  }

  @media only screen and (min-width: 900px) {
    li:first-child {
      display: none;
    }
  }
`;

const NavBtn = styled(StyledBtn)`
  margin-bottom: 0;
  background-color: white;
  color: black;
  font-weight: 700;
  border-radius: ${(props) => (props.left ? '1rem 0 0 1rem' : '0 1rem 1rem 0')};

  &:hover {
    background-color: #cacaca;
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledHeader>EZ-CVMAKER</StyledHeader>
      <StyledList>
        <li>
          <NavBtn left>Edit</NavBtn>
          <NavBtn>Preview</NavBtn>
        </li>
        <li>
          <a href="https://github.com/bananabread08/cv-app">
            <img src={ghIcon} alt="github icon"></img>
          </a>
        </li>
      </StyledList>
    </StyledNav>
  );
}
