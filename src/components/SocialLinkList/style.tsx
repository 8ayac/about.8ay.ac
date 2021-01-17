import { css } from '@emotion/react';
import { mq } from '@src/shared/styles/MediaQuery';

export const linkListWrapper = css`
  display: flex;
  flex-flow: row wrap;

  ${mq('sm')} {
    flex-flow: column wrap;
  }
`;

export const socialLink = css`
  padding: 0.25rem 0;
  margin-right: 2.8rem;
  font-size: 1.6rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const socialIcon = css`
  padding-right: 0.5rem;
`;
