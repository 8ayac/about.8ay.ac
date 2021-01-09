import { ExperienceEntry } from '@src/components/App/ExperienceEntry';
import { ExperienceField } from '@src/components/App/ExperienceField';
import { AchievementExperience } from '@src/types';
import React from 'react';

export const AchievementExperienceField: React.FC<{
  achievements: AchievementExperience[];
}> = (props) => {
  const { achievements } = props;
  const entries = (
    <>
      {achievements.map((exp, idx) => {
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
    <ExperienceField
      name="Awarded & Achievements"
      experienceEntries={entries}
    />
  );
};
