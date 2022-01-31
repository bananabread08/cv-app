import { Wrapper } from '../styles/shared/sharedStyle';

export default function SkillsPreview(props) {
  return (
    <Wrapper>
      <h3>Relevant Skills</h3>
      <p>{props.skillValues.skill}</p>
    </Wrapper>
  );
}
