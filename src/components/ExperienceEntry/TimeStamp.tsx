import { toDateStringForPresentation, toTermString } from '@src/utils/helper';
import React from 'react';

export const TimeStamp: React.FC<{
  time: string | [start: string, end: string | undefined];
}> = (props) => {
  const { time } = props;

  return (
    <i>
      {typeof time === 'string'
        ? toDateStringForPresentation(time)
        : toTermString(time[0], time[1])}
    </i>
  );
};
