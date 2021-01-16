import { timeStamp } from '@src/components/App/ExperienceEntryWithThumbnail/style';
import { ExperienceDate } from '@src/types';
import { experienceDateToString } from '@src/utils/helper';
import React from 'react';

export const TimeStamp: React.FC<{
  time: ExperienceDate;
}> = (props) => {
  const { time } = props;

  return <i css={timeStamp}>{experienceDateToString(time)}</i>;
};
