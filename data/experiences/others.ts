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
  {
    title: 'LINE CTF 2022',
    summaries: [
        'Organized LINE CTF 2022 as a member of LINE AST(Application Security Team).',
        'Made a web challenge. (Haribote Secure Note)'
    ],
    references: [
      {
        url: 'https://linecorp.com/en/pr/news/en/2022/4148',
        description: 'Press Release (en)'
      },
      {
        url: 'https://linecorp.com/ja/pr/news/ja/2022/4147',
        description: 'Press Release (jp)'
      },
      { url: 'https://ctftime.org/event/1472/' },
    ],
    date: { startedAt: '2022-03-26', endedAt: '2022-03-27'}
  }
];
