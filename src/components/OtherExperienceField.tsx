import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { ExperienceField } from '@src/components/ExperienceField';
import { OtherExperience } from '@src/types';
import React from 'react';

export const OtherExperienceField: React.FC<{
  otherActivities: OtherExperience[];
}> = (props) => {
  const { otherActivities } = props;
  const entries = (
    <>
      {otherActivities.map((exp, idx) => {
        return (
          <ExperienceEntry
            /* eslint-disable-next-line react/no-array-index-key */
            key={idx}
            title={exp.title}
            summaries={exp.summaries}
            references={exp.references}
            time={exp.date}
          />
        );
      })}
    </>
  );

  return (
    <ExperienceField name="Other Activities" experienceEntries={entries} />
  );
};
