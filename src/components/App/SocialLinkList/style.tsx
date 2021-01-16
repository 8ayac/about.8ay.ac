import { css } from '@emotion/react';

export const linkListWrapper = css`
  display: flex;
  flex-flow: row wrap;
`;

export const socialLink = css`
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
