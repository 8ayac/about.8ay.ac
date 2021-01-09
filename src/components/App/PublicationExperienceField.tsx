import { ExperienceEntry } from '@src/components/App/ExperienceEntry';
import { ExperienceField } from '@src/components/App/ExperienceField';
import { PublicationExperience } from '@src/types';
import { getExperienceTitle } from '@src/utils/helper';
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
            title={getExperienceTitle(exp)}
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
