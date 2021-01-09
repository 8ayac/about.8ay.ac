import { ExperienceEntry } from '@src/components/App/ExperienceEntry';
import { ExperienceField } from '@src/components/App/ExperienceField';
import { PersonalExperience } from '@src/types';
import { getExperienceTitle } from '@src/utils/helper';
import React from 'react';

export const PersonalExperienceField: React.FC<{
  personalActivities: PersonalExperience[];
}> = (props) => {
  const { personalActivities } = props;
  const entries = (
    <>
      {personalActivities.map((exp, idx) => (
        <ExperienceEntry
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          title={getExperienceTitle(exp)}
          summaries={exp.summaries}
          references={exp.references}
          time={exp.date}
        />
      ))}
    </>
  );

  return (
    <ExperienceField name="Personal Activities" experienceEntries={entries} />
  );
};
