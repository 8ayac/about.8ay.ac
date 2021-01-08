import { WorkHistory } from '@src/types';

export const work: WorkHistory[] = [
  {
    belongsTo: 'Cybozu, Inc',
    position: 'Part-time Security Engineer',
    startedAt: '2018-04-11',
    endedAt: '2019-05-23',
    summaries: [
      'Security testing and risk assessment',
      'Operating Cybozu Bug Bounty Program',
    ],
  },
  {
    belongsTo: 'Mitsui Bussan Secure Directions, Inc',
    position: 'Part-time Security Engineer',
    startedAt: '2019-07-02',
    endedAt: '2020-03-31',
    summaries: ['Vulnerability testing of web applications'],
  },
];
