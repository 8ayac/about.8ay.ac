import { EducationalExperience } from '@src/types';

export const education: EducationalExperience[] = [
  {
    degree: 'Undergraduate Student',
    department: 'Information Security',
    school: 'Information Science College',
    location: 'Kanagawa',
    summaries: ['Currently studying as a student.'],
    references: [
      {
        url: 'http://isc.iwasaki.ac.jp/index.html',
        description: 'School information',
      },
    ],
    date: { startedAt: '2017-04-01' },
  },
];
