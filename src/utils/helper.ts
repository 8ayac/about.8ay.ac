import moment from '@node_modules/moment';
import { DateString, Experience, ExperienceDate } from '@src/types';

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

export const getExperienceTitle = (exp: Experience & any): string => {
  if ('title' in exp) {
    return exp.title;
  }

  // For educational experiences
  if ('school' in exp) {
    return [exp.degree, exp.department, exp.faculty, exp.school, exp.location]
      .filter((v) => v)
      .join(', ');
  }

  // For work experiences
  if ('belongsTo' in exp) {
    return `${exp.position} at ${exp.belongsTo}`;
  }

  return '';
};
