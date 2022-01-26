import EducationPreview from './EducationPreview';
import GenInfoPreview from './GenInfoPreview';
import ExperiencePreview from './ExperiencePreview';
import SkillsPreview from './SkillsPreview';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
  border: 1px solid #727272;
  background-color: #fff;
  width: 95%;
  margin: 0 auto;
  width: 21cm;
  height: 29.7cm;

  @media only screen and (min-width: 768px) {
    min-width: 21cm;
  }
`;
export default function Preview({
  schoolList,
  genInfoValues,
  experienceList,
  skillValues,
}) {
  return (
    <PreviewWrapper>
      <GenInfoPreview genInfoValues={genInfoValues} />
      <hr width="90%"></hr>
      <EducationPreview schoolList={schoolList} />
      <hr width="90%"></hr>
      <ExperiencePreview experienceList={experienceList} />
      <hr width="90%"></hr>
      <SkillsPreview skillValues={skillValues} />
    </PreviewWrapper>
  );
}
