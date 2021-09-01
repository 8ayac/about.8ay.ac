import { EducationalExperience } from '@src/types';

export const education: EducationalExperience[] = [
  {
    degree: '',
    department: 'Information Security',
    school: 'Information Science College',
    location: 'Kanagawa',
    summaries: ['Received Advanced Diploma(Applied Professional Postsecondary Course(Technology))'],
    references: [
      {
        url: 'http://isc.iwasaki.ac.jp/index.html',
        description: 'School information',
      },
      {
        url: 'https://en.wikipedia.org/wiki/Advanced_Diploma_(Japan)',
        description: 'Advanced Diploma (Japan)',
      },
    ],
    date: { startedAt: '2017-04-01', endedAt: '2021-03-31' },
  },
];
