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
      startedAt: '2021-04-01',
      endedAt: '2023-09-31'
    },
    summaries: [
      'Worked as a member of the Application Security Team',
      'Ensured the security and quality of a wide range services and products developed by LINE and group companies. Platforms and technologies include Web, mobile, desktop, IoT, Fintech, and more.'
    ],
    references: [
      {
        url: 'https://linecorp.com',
        description: 'Corporate Site'
      }
    ]
  },
  {
    belongsTo: 'LY Corporation',
    position: 'Security Engineer',
    date: {
      startedAt: '2023-10-01',
    },
    summaries: [
      '⚠Background⚠ LINE Corporation, the aforementioned company I worked for, became LY Corporation as of October 1, 2023',
      'Working as a member of the Security Assessment Team 1',
      'Ensuring the security and quality of a wide range services and products developed by LY Corporation and group companies. Platforms and technologies include Web, mobile, desktop, IoT, Fintech, and more.',
    ],
    references: [
      {
        url: 'https://www.lycorp.co.jp',
        description: 'Corporate Site'
      }
    ]
  }
];
