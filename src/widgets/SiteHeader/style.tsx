import { css } from '@emotion/react';
import { mq } from '@src/shared/styles/mediaQuery';

export const header = css`
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const siteTitle = css`
  margin: 3rem auto;
  font-size: 5rem;
  line-height: 1.25;

  ${mq('sm')} {
    margin: 10% auto;
  }
`;
