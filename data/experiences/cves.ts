import { CveExperience } from '@src/types';

export const cves: CveExperience[] = [
  {
    title: 'CVE-2018-0652',
    summaries: ['Found an Stored XSS on GROWI.'],
    references: [
      {
        url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-0652',
        description: 'cve.mitre.org',
      },
    ],
    date: '2018-08-03',
  },
  {
    title: 'CVE-2018-0653',
    summaries: ['Found an Stored XSS on GROWI.'],
    references: [
      {
        url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-0653',
        description: 'cve.mitre.org',
      },
    ],
    date: '2018-08-03',
  },
  {
    title: 'CVE-2018-17454',
    summaries: ['Found an Stored XSS on GitLab'],
    references: [
      {
        url:
          'https://about.gitlab.com/releases/2018/10/01/security-release-gitlab-11-dot-3-dot-1-released/#:~:text=CVE-2018-17454',
        description: 'GitLab Security Release: 11.3.1, 11.2.4, and 11.1.7',
      },
      {
        url: 'https://hackerone.com/reports/384255',
        description: 'Original report on HackerOne',
      },
    ],
    date: '2018-10-01',
  },
  {
    title: 'CVE-2018-18640',
    summaries: [
      'Found an inappropriate caching policy that possibly cause sensitive information exposures on GitLab.',
    ],
    references: [
      {
        url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-18640',
        description: 'cve.mitre.org',
      },
      {
        url:
          'https://about.gitlab.com/releases/2018/10/29/security-release-gitlab-11-dot-4-dot-3-released/#:~:text=CVE-2018-18640',
        description: 'GitLab Security Release: 11.4.3, 11.3.8, and 11.2.7',
      },
      {
        url: 'https://hackerone.com/reports/407763',
        description: 'Original report on HackerOne',
      },
    ],
    date: '2018-10-29',
  },
  {
    title: 'CVE-2019-6785',
    summaries: ['Found an input validation issue which could result in a DoS.'],
    references: [
      {
        url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6785',
        description: 'cve.mitre.org',
      },
      {
        url:
          'https://about.gitlab.com/releases/2019/01/31/security-release-gitlab-11-dot-7-dot-3-released/#:~:text=CVE-2019-6785',
        description: 'GitLab Security Release: 11.7.3, 11.6.8, 11.5.10',
      },
      {
        url: 'https://hackerone.com/reports/557154',
        description: 'Original report on HackerOne',
      },
    ],
    date: '2019-01-31',
  },
  {
    title: 'CVE-2019-9220',
    summaries: ['Found an input validation issue which could result in a DoS.'],
    references: [
      {
        url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9220',
        description: 'cve.mitre.org',
      },
      {
        url:
          'https://about.gitlab.com/releases/2019/03/04/security-release-gitlab-11-dot-8-dot-1-released/#:~:text=CVE-2019-9220',
        description: 'GitLab Security Release: 11.8.1, 11.7.6, and 11.6.10',
      },
      {
        url: 'https://hackerone.com/reports/470067',
        description: 'Original report on HackerOne',
      },
    ],
    date: '2019-03-04',
  },
  {
    title: 'CVE-2019-13010',
    summaries: ['Found an ReDoS on GitLab.'],
    references: [
      {
        url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13010',
        description: 'cve.mitre.org',
      },
      {
        url:
          'https://about.gitlab.com/releases/2019/07/03/security-release-gitlab-12-dot-0-dot-3-released/#:~:text=CVE-2019-13010',
        description: 'GitLab Security Release: 12.0.3, 11.11.5, and 11.10.8',
      },
      {
        url: 'https://hackerone.com/reports/511381',
        description: 'Original report on HackerOne',
      },
    ],
    date: '2019-07-03',
  },
  {
    title: 'CVE-2022-22978',
    summaries: [
      'Authorization Bypass in RegexRequestMatcher of Spring Security',
      'Contributed to identifying the cause in resolving this issue, and was credited.',
    ],
    references: [
      {
        url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-22978',
        description: 'cve.mitre.org',
      },
      {
        url: 'https://tanzu.vmware.com/security/cve-2022-22978',
        description: 'CVE-2022-22978 | Security | VMware Tanzu',
      },
    ],
    date: '2022-05-16',
  },
];
