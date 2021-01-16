import { css } from '@emotion/react';
import { theme } from '@src/pages/_app';

export const thumbnail = css`
  margin: 0.5rem 0;
  border: 1px solid ${theme.color.blue.light3};

  &:hover {
    filter: opacity(65%);
    border: 1px solid ${theme.color.blue.base};
  }
`;
