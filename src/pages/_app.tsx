import { css, Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import React from 'react';

const colors = {
  blue: {
    base: 'hsla(212, 72%, 60%)',
    light: 'hsla(212, 72%, 70%)',
    light2: 'hsla(212, 72%, 80%)',
    light3: 'hsla(212, 72%, 90%)',
    dark: 'hsla(212, 72%, 50%)',
    dark2: 'hsla(212, 72%, 40%)',
    dark3: 'hsla(212, 72%, 30%)',
    dark4: 'hsla(212, 72%, 20%)',
  },
  green: {
    base: 'hsla(148, 72%, 60%)',
    light: 'hsla(148, 72%, 70%)',
    light2: 'hsla(148, 72%, 80%)',
    light3: 'hsla(148, 72%, 90%)',
    dark: 'hsla(148, 72%, 50%)',
    dark1: 'hsla(148, 72%, 40%)',
    dark2: 'hsla(148, 72%, 30%)',
    dark3: 'hsla(148, 72%, 20%)',
  },
};

export const theme = {
  color: {
    blue: colors.blue,

    primary: colors.blue.base,
    primaryLight: colors.blue.light,
    primaryDark: colors.blue.dark,

    text: {
      primary: 'hsla(0, 0%, 15%)',
      secondary: colors.blue.dark,
      accent: colors.green.dark,
    },
  },
};

const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    max-width: 980px;
    padding: 0 10%;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
      'Helvetica Neue', HelveticaNeue, YuGothic, 'Yu Gothic Medium', 'Yu Gothic',
      Verdana, Meiryo, sans-serif;
    color: ${theme.color.text.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: normal;
  }

  a {
    margin-left: 0.5rem;
    color: ${theme.color.text.secondary};

    &:hover {
      color: ${theme.color.text.accent};
      text-decoration: underline;
    }

    &:visited {
      color: ${theme.color.text.secondary};
      &:after {
        content: '+';
      }
    }
  }

  li {
    margin-bottom: 0.5rem;
  }

  section {
    margin: 8rem auto;
  }
`;

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
