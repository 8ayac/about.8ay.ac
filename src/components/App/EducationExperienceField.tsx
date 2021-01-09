import { ExperienceEntry } from '@src/components/App/ExperienceEntry';
import { ExperienceField } from '@src/components/App/ExperienceField';
import { EducationalExperience } from '@src/types';
import { getExperienceTitle } from '@src/utils/helper';
import React from 'react';

export const EducationExperienceField: React.FC<{
  educations: EducationalExperience[];
}> = (props) => {
  const { educations } = props;
  const entries = (
    <>
      {educations.map((exp, idx) => (
        <ExperienceEntry
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          title={getExperienceTitle(exp)}
          time={exp.date}
        />
      ))}
    </>
  );

  return <ExperienceField name="Education" experienceEntries={entries} />;
};
