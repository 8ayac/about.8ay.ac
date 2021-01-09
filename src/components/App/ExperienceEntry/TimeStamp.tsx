import { ExperienceDate } from '@src/types';
import { experienceDateToString } from '@src/utils/helper';
import React from 'react';

export const TimeStamp: React.FC<{
  time: ExperienceDate;
}> = (props) => {
  const { time } = props;

  return <i>{experienceDateToString(time)}</i>;
};
