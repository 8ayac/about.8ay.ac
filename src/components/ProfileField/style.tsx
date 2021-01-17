import { css } from '@emotion/react';
import { theme } from '@src/constants/theme';
import { mq } from '@src/shared/styles/mediaQuery';

export const wrapper = css`
  font-size: 2rem;
`;

export const fieldName = css`
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${theme.color.primary};
`;

export const fieldBody = (withThumbnail: boolean) => css`
  ${withThumbnail &&
  css`
    display: grid;
  `}

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 3rem;
  column-gap: 1.5rem;

  font-size: 1.5rem;

  ${mq('sm')} {
    row-gap: 1.5rem;
  }
`;
