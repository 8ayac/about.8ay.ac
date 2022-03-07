import { PublicationExperience } from '@src/types';

export const publications: PublicationExperience[] = [
  {
    title: 'DEFCON 27 OpenCTF 2019 参戦レポート',
    summaries: ['Published in HISYS Journal Vol.34.'],
    references: [
      {
        url: 'https://www.shield.ne.jp/ssrc/document/doc/SSRC-HJ-201910.pdf',
        description: 'HISYS Journal Vol.34',
      },
    ],
    date: '2019-10-03',
  },
  {
    title: '技能五輪国際大会（WorldSkills Kazan 2019）出場レポート',
    summaries: ['Published in HISYS Journal Vol.35.'],
    references: [
      {
        url: 'https://www.shield.ne.jp/ssrc/document/doc/SSRC-HJ-201910-2.pdf',
        description: 'HISYS Journal Vol.35',
      },
    ],
    date: '2019-10-28',
  },
  {
    title: 'GraphQL診断ガイドライン',
    summaries: [
      'Guidelines for vulnerability testing on GraphQL, written by some members of ISOG-J WG1.',
    ],
    date: '2021-12-24',
    references: [
      { url: 'https://github.com/WebAppPentestGuidelines/graphQLGuideLine' },
      { url: 'https://isog-j.org/activities/#:~:text=WG1', description: 'About ISOG-J WG1'}
    ]
  },
  {
    title: 'Webアプリケーション脆弱性診断ガイドライン 第1.2版',
    summaries: [
      'Guidelines for web application vulnerability testing, written by some members of ISOG-J WG1.',
    ],
    date: '2022-03-01',
    references: [
      { url: 'https://github.com/WebAppPentestGuidelines/WebAppPentestGuidelines' },
      { url: 'https://isog-j.org/activities/#:~:text=WG1', description: 'About ISOG-J WG1'}
    ]
  }
];
