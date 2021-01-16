import { css } from '@emotion/react';
import { theme } from '@src/constants/theme';

export const wrapper = css`
  font-size: 2rem;
`;

export const fieldName = css`
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${theme.color.primary};
`;

export const fieldBody = css`
  font-size: 1.5rem;
`;
