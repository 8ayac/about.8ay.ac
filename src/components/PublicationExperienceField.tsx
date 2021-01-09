import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { ExperienceField } from '@src/components/ExperienceField';
import { PublicationExperience } from '@src/types';
import React from 'react';

export const PublicationExperienceField: React.FC<{
  publications: PublicationExperience[];
}> = (props) => {
  const { publications } = props;
  const entries = (
    <>
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
    </>
  );

  return <ExperienceField name="Publications" experienceEntries={entries} />;
};
