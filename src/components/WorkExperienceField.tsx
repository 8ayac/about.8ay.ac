import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { ExperienceField } from '@src/components/ExperienceField';
import { WorkExperience } from '@src/types';
import React from 'react';

export const WorkExperienceField: React.FC<{
  workExperiences: WorkExperience[];
}> = (props) => {
  const { workExperiences } = props;
  const entries = (
    <>
      {workExperiences.map((exp, idx) => (
        <ExperienceEntry
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          title={exp.belongsTo}
          summaries={exp.summaries}
          references={exp.references}
          time={exp.date}
        />
      ))}
    </>
  );

  return <ExperienceField name="Work Experience" experienceEntries={entries} />;
};
