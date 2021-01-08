import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { AchievementExperience } from '@src/types';
import React from 'react';

export const AchievementsSection: React.FC<{
  achievements: AchievementExperience[];
}> = (props) => {
  const { achievements } = props;
  return (
    <>
      <section className="achievements">
        <h2>Awarded & Achievements</h2>
        {achievements.map((exp, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`achievement-${idx}`} className="experience-entry">
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
