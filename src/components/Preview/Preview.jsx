import EducationPreview from './EducationPreview';
import GenInfoPreview from './GenInfoPreview';
import ExperiencePreview from './ExperiencePreview';
export default function Preview({ schoolList, genInfoValues, experienceList }) {
  return (
    <div>
      <GenInfoPreview genInfoValues={genInfoValues} />
      <EducationPreview schoolList={schoolList} />
      <ExperiencePreview experienceList={experienceList} />
    </div>
  );
}
