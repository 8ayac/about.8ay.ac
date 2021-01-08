import moment from '@node_modules/moment';
import { DateString, ExperienceDate } from '@src/types';

export const experienceDateToString = (expDate: ExperienceDate): string => {
  const s = (date: DateString): string => moment(date).format('ll');

  if (typeof expDate !== 'object') {
    return s(expDate);
  }

  if (!expDate.endedAt) {
    return `${s(expDate.startedAt)} - PRESENT`;
  }
  return `${s(expDate.startedAt)} - ${s(expDate.endedAt)}`;
};
