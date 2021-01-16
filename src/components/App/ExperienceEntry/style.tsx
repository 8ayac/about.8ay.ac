import { css } from '@emotion/react';
import { theme } from '@src/pages/_app';

export const entryWrapper = css`
  margin-bottom: 6rem;
`;

export const entryBody = css`
  font-size: 1.66rem;
`;

export const entryTitle = css`
  padding-bottom: 0.3rem;
  font-weight: bold;
  border-bottom: 1px dotted ${theme.color.primaryLight};
`;

export const timeStamp = css`
  float: right;
  padding-top: 0.3rem;
  font-size: 1.25rem;
`;

export const descriptionList = css`
  padding-left: 0;
  margin-top: 2.5rem;
  list-style: none;
`;

export const descriptionItem = css`
  word-break: break-all;

  &::before {
    margin-right: 0.8rem;
    content: '+';
  }
`;
