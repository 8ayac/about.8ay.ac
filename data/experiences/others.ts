import { OtherExperience } from '@src/types';

export const others: OtherExperience[] = [
  {
    title: 'Burp Suite Japan User Group',
    summaries: [
      'A user group of a local proxy tool "Burp Suite.',
      'Organizing some events and supporting other management tasks.',
    ],
    date: { startedAt: '2019-01-01' },
  },
  {
    title: 'ISCCTF 2020',
    summaries: [
        'Organized ISCCTF 2020.',
        'Made some web challenges. (Greetinjs, mark damn it)'
    ],
    references: [
      { url: 'https://caya8.hatenablog.com/entry/2020/10/28/080123' },
    ],
    date: '2020-10-24',
  },
];
