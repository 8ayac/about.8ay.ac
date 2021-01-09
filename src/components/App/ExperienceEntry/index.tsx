import { Descriptions } from '@src/components/App/ExperienceEntry/Descriptions';
import { TimeStamp } from '@src/components/App/ExperienceEntry/TimeStamp';
import { Title } from '@src/components/App/ExperienceEntry/Title';
import { ExperienceDate, LinkWithDescription } from '@src/types';
import React from 'react';

export const ExperienceEntry: React.FC<{
  title: string;
  summaries?: string[];
  references?: LinkWithDescription[];
  time: ExperienceDate;
}> = (props) => {
  const { title, summaries, references, time } = props;

  return (
    <div className="experience-entry">
      <div className="experience-body">
        <Title title={title} />
        <Descriptions summaries={summaries} references={references} />
        <TimeStamp time={time} />
      </div>
    </div>
  );
};
