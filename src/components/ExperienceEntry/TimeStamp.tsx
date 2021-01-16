import { timeStamp } from '@src/components/ExperienceEntry/style';
import { ExperienceDate } from '@src/types';
import { experienceDateToString } from '@src/utils/helper';
import React from 'react';

export const TimeStamp: React.FC<{
  time: ExperienceDate;
  floatRight?: boolean;
}> = (props) => {
  const { time, floatRight } = props;

  return <i css={timeStamp(floatRight)}>{experienceDateToString(time)}</i>;
};
