import { css } from '@emotion/react';
import { theme } from '@src/constants/theme';
import { mq } from '@src/shared/styles/MediaQuery';

const baseFontSize = 1.8; // rem

export const entryWrapper = (withThumbnail: boolean) => css`
  margin-bottom: ${withThumbnail ? 1 : 6}rem;
`;

export const entryBody = (withThumbnail: boolean) => css`
  font-size: ${baseFontSize}rem;
  ${withThumbnail &&
  css`
    text-align: center;
  `}
`;

export const entryTitle = css`
  padding-bottom: 0.3rem;
  font-size: ${baseFontSize * 1.1}rem;
  font-weight: bold;
  border-bottom: 1px dotted ${theme.color.primaryLight};
`;

export const timeStamp = (floatRight?: boolean) => css`
  ${floatRight &&
  css`
    float: right;
  `}
  padding-top: 0.3rem;
  font-size: 1.25rem;
`;

export const description = css`
  padding: 0 1rem;
`;

export const descriptionList = css`
  padding-left: 0;
  margin-top: 2.5rem;
  list-style: none;

  ${mq('sm')} {
    margin-top: 3rem;
  }
`;

export const descriptionItem = css`
  word-break: break-all;

  &::before {
    margin-right: 0.8rem;
    content: '+';
  }
`;
