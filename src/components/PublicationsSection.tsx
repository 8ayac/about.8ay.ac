import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { PublicationExperience } from '@src/types';
import React from 'react';

export const PublicationsSection: React.FC<{
  publications: PublicationExperience[];
}> = (props) => {
  const { publications } = props;

  return (
    <>
      <section className="publications">
        <h2>Publications</h2>
        {publications.map((exp, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`publication-${idx}`} className="experience-entry">
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
