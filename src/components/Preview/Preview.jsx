import EducationPreview from './EducationPreview';
import GenInfoPreview from './GenInfoPreview';
export default function Preview({ schoolList, genInfoValues }) {
  return (
    <div>
      <GenInfoPreview genInfoValues={genInfoValues} />
      <EducationPreview schoolList={schoolList} />
    </div>
  );
}
