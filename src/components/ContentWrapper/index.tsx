import styled from '@emotion/styled';
import { Property } from 'csstype';

export const ContentWrapper = styled.div<{
  paddingTop?: Property.PaddingTop;
  paddingBottom?: Property.PaddingBottom;
}>(({ paddingTop = 0, paddingBottom = 0 }) => ({
  maxWidth: '1275px',
  paddingTop,
  paddingBottom,
  paddingLeft: '1.3rem',
  paddingRight: '1.3rem',
  margin: '0 auto',
}));
