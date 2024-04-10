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
        'Organized ISCCTF 2020 as a member of team IPFactory.',
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
  },
  {
    title: 'LINE CTF 2023',
    summaries: [
        'Organized LINE CTF 2023 as a member of LINE AST(Application Security Team).',
        'Made a web challenge. (Old Pal)'
    ],
    references: [
      {
        url: 'https://linecorp.com/en/pr/news/en/2023/4519',
        description: 'Press Release (en)'
      },
      {
        url: 'https://linecorp.com/ja/pr/news/ja/2023/4508',
        description: 'Press Release (jp)'
      },
      { url: 'https://ctftime.org/event/1716' },
      {
        url: 'https://blog.8ay.ac/articles/2023-03-31/linectf-2023-web-oldpal-author-writeup',
        description: 'LINE CTF 2023 [Web] Old Pal - Author\'s writeup - もしくはこれ'
      },
      {
        url: 'https://blog.8ay.ac/articles/2023-03-31/linectf-2023-web-oldpal-author-writeup-english-ver',
        description: 'LINE CTF 2023 [Web] Old Pal - Author\'s writeup [English] - もしくはこれ'
      }
    ],
    date: { startedAt: '2023-03-25', endedAt: '2023-03-26'}
  },
  {
    title: 'LINE CTF 2024', 
    summaries: [
      'Organized LINE CTF 2024 as a member of LY Corporation SAT1 (Security Assessment Team 1).',
      'Made a web challenge. (Boom Boom Hell*)'
    ],
    date: { startedAt: '2024-03-23', endedAt: '2024-03-24' }
  }
];
