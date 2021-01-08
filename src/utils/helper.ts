import moment from '@node_modules/moment';

export const toDateStringForPresentation = (date: string): string => {
  return moment(date).format('ll');
};

export const toTermString = (
  start: string,
  end: string | null | undefined
): string => {
  if (!end) return `${toDateStringForPresentation(start)} - PRESENT`;
  return [start, end].map((v) => toDateStringForPresentation(v)).join(' - ');
};
