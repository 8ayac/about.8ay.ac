import { ExperienceEntry } from '@src/components/App/ExperienceEntry';
import { ExperienceField } from '@src/components/App/ExperienceField';
import { OtherExperience } from '@src/types';
import { getExperienceTitle } from '@src/utils/helper';
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
            title={getExperienceTitle(exp)}
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
