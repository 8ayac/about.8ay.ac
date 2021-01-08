import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { OtherExperience } from '@src/types';
import React from 'react';

export const OtherActivitiesSection: React.FC<{
  otherActivities: OtherExperience[];
}> = (props) => {
  const { otherActivities } = props;

  return (
    <>
      <section className="others">
        <h2>Other Activities</h2>
        {otherActivities.map((exp, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`other-${idx}`} className="experience-entry">
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
