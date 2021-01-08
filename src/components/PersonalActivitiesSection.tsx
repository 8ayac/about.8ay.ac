import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { PersonalExperience } from '@src/types';
import React from 'react';

export const PersonalActivitiesSection: React.FC<{
  personalActivities: PersonalExperience[];
}> = (props) => {
  const { personalActivities } = props;

  return (
    <>
      <section className="personal-activities">
        <h2>Personal Activities & CVEs</h2>
        {personalActivities.map((exp, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`personal-${idx}`} className="experience-entry">
            <ExperienceEntry
              title={exp.title}
              summaries={exp.summaries}
              references={exp.references}
              time={exp.date}
            />
          </div>
        ))}
      </section>
    </>
  );
};
