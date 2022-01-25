import EducationPreview from './EducationPreview';
import GenInfoPreview from './GenInfoPreview';
import ExperiencePreview from './ExperiencePreview';
import SkillsPreview from './SkillsPreview';
export default function Preview({
  schoolList,
  genInfoValues,
  experienceList,
  skillValues,
}) {
  return (
    <div>
      <GenInfoPreview genInfoValues={genInfoValues} />
      <EducationPreview schoolList={schoolList} />
      <ExperiencePreview experienceList={experienceList} />
      <SkillsPreview skillValues={skillValues} />
    </div>
  );
}
