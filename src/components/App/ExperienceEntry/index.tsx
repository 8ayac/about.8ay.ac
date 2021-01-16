import { Descriptions } from '@src/components/App/ExperienceEntry/Descriptions';
import { TimeStamp } from '@src/components/App/ExperienceEntry/TimeStamp';
import { Title } from '@src/components/App/ExperienceEntry/Title';
import {
  entryBody,
  entryWrapper,
} from '@src/components/App/ExperienceEntry/style';
import { Experience } from '@src/types';
import { getExperienceTitle } from '@src/utils/helper';
import React from 'react';

export const ExperienceEntry: React.FC<{
  experience: Experience;
}> = (props) => {
  const { experience } = props;

  return (
    <div css={entryWrapper}>
      <div css={entryBody}>
        <Title title={getExperienceTitle(experience)} />
        <TimeStamp time={experience.date} />
        <Descriptions
          summaries={experience.summaries}
          references={experience.references}
        />
      </div>
    </div>
  );
};
