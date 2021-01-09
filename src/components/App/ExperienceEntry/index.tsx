import { Descriptions } from '@src/components/App/ExperienceEntry/Descriptions';
import { TimeStamp } from '@src/components/App/ExperienceEntry/TimeStamp';
import { Title } from '@src/components/App/ExperienceEntry/Title';
import { Experience } from '@src/types';
import { getExperienceTitle } from '@src/utils/helper';
import React from 'react';

export const ExperienceEntry: React.FC<{
  experience: Experience;
}> = (props) => {
  const { experience } = props;

  return (
    <div className="experience-entry">
      <div className="experience-body">
        <Title title={getExperienceTitle(experience)} />
        <Descriptions
          summaries={experience.summaries}
          references={experience.references}
        />
        <TimeStamp time={experience.date} />
      </div>
    </div>
  );
};
