import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { css } from '@emotion/react';
import { theme } from '@src/constants/theme';
import { mq } from '@src/shared/styles/mediaQuery';

config.autoAddCss = false;

const gHtmlStyle = css`
  html {
    font-size: 62.5%;
  }
`;

const gBodyStyle = css`
  body {
    max-width: 980px;
    padding: 0 10%;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
      'Helvetica Neue', HelveticaNeue, YuGothic, 'Yu Gothic Medium', 'Yu Gothic',
      Verdana, Meiryo, sans-serif;
    color: ${theme.color.text.primary};
  }
`;

const gHeadingStyle = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: normal;
  }
`;

const gAStyle = css`
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
`;

const gPStyle = css`
  p {
    margin: 0;
  }
`;

const gLiStyle = css`
  li {
    margin-bottom: 0.5rem;
  }
`;

const gSectionStyle = css`
  section {
    margin: 8rem auto;

    ${mq('sm')} {
      margin: 4rem auto;
    }
  }
`;

export const globalStyle = css`
  ${dom.css()}
  ${gHtmlStyle}
  ${gBodyStyle}
  ${gHeadingStyle}
  ${gAStyle}
  ${gPStyle}
  ${gLiStyle}
  ${gSectionStyle}
`;
