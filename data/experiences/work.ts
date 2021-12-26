import { WorkExperience } from '@src/types';

export const work: WorkExperience[] = [
  {
    belongsTo: 'Cybozu, Inc',
    position: 'Part-time Security Engineer',
    date: {
      startedAt: '2018-04-11',
      endedAt: '2019-05-23',
    },
    summaries: [
      'Did security testing and risk assessment',
      'Operated Cybozu Bug Bounty Program',
    ],
  },
  {
    belongsTo: 'Mitsui Bussan Secure Directions, Inc',
    position: 'Part-time Security Engineer',
    date: {
      startedAt: '2019-07-02',
      endedAt: '2020-03-31',
    },
    summaries: ['Did vulnerability testing of web applications'],
  },
  {
    belongsTo: 'LINE Corporation',
    position: 'Application Security Engineer',
    date: {
      startedAt: '2021-04-01'
    },
    summaries: [
      'Working as a member of the Application Security Team',
      'Ensuring the security and quality of a wide range services and products developed by LINE and group companies. Platforms and technologies include Web, mobile, desktop, IoT, Fintech, and more.'
    ],
    references: [
      {
        url: 'https://line-careers.website.line-apps.com/jobs/168',
        description: 'Job description'
      }
    ]
  }
];
