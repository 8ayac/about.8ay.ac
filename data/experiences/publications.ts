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
      'Guidelines for vulnerability testing on GraphQL',
      'Co-authored with the ISOG-J WG1 members',
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
      'Guidelines for web application vulnerability testing',
      'Co-authored with the ISOG-J WG1 members'
    ],
    date: '2022-03-01',
    references: [
      { url: 'https://github.com/WebAppPentestGuidelines/WebAppPentestGuidelines' },
      { url: 'https://isog-j.org/activities/#:~:text=WG1', description: 'About ISOG-J WG1'}
    ]
  },
  {
    title: '細かすぎるけど伝わってほしい脆弱性診断手法ドキュメント',
    summaries: [
      'The document focused on minor vulnerabilities that are often overlooked',
      'Co-authored with the ISOG-J WG1 members'
    ],
    date: '2023-04-12',
    references: [
      { url: 'https://webapppentestguidelines.github.io/newtechtestdoc' },
      { url: 'https://news.yahoo.co.jp/articles/eadff573fdd6bad1d1d5f04cbbb2cf48d4cdfb4b' },
      { url: 'https://scan.netsecurity.ne.jp/article/2023/04/19/49227.html' },
      { url: 'https://isog-j.org/activities/#:~:text=WG1', description: 'About ISOG-J WG1'}
    ]
  }
];
