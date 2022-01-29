import styled from 'styled-components';
import CallIcon from '../../assets/call.png';
import EmailIcon from '../../assets/email.png';
import HomeIcon from '../../assets/home-address.png';
import SiteIcon from '../../assets/website.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    vertical-align: middle;
    margin-right: 5px;
    width: 25px;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const NameContainer = styled.p`
  font-size: 23px;
  font-weight: 700;
`;
const RoleContainer = styled.p`
  margin-top: -20px;
  font-size: 20px;
`;
export default function GenInfoPreview(props) {
  const { name, role, address, contact, email, site } = props.genInfoValues;
  return (
    <Wrapper>
      <LeftContainer>
        <NameContainer>{name}</NameContainer>
        <RoleContainer>{role}</RoleContainer>
      </LeftContainer>
      <RightContainer>
        <div>
          <img src={CallIcon} alt="Call Icon"></img>
          {contact}
        </div>
        <div>
          <img src={HomeIcon} alt="Home Icon"></img>
          {address}
        </div>
        <div>
          <img src={EmailIcon} alt="Email Icon"></img>
          {email}
        </div>
        {site && (
          <div>
            <img src={SiteIcon} alt="Website Icon"></img>
            {site}
            <a href={site}>[1]</a>
          </div>
        )}
      </RightContainer>
    </Wrapper>
  );
}
