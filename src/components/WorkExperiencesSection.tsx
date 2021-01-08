import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { WorkHistory } from '@src/types';
import React from 'react';

export const WorkExperiencesSection: React.FC<{
  workExperiences: WorkHistory[];
}> = (props) => {
  const { workExperiences } = props;
  return (
    <>
      <section className="work-experiences">
        <h2>Work Experiences</h2>
        {workExperiences.map((exp, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`we-${idx}`} className="experience-entry">
            <ExperienceEntry
              title={exp.belongsTo}
              summaries={exp.summaries}
              references={exp.references}
              time={[exp.startedAt, exp.endedAt]}
            />
          </div>
        ))}
      </section>
    </>
  );
};
