import * as React from 'react';
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
const Preview = React.forwardRef((props, ref) => {
  return (
    <PreviewWrapper ref={ref}>
      <GenInfoPreview genInfoValues={props.genInfoValues} />
      <hr width="90%"></hr>
      <EducationPreview schoolList={props.schoolList} />
      <hr width="90%"></hr>
      <ExperiencePreview experienceList={props.experienceList} />
      <hr width="90%"></hr>
      <SkillsPreview skillValues={props.skillValues} />
    </PreviewWrapper>
  );
});

export default Preview;
