import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '@src/constants/theme';
import { globalStyle } from '@src/shared/styles/global';
import { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
