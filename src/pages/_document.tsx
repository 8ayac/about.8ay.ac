import { config } from '@site.config';
import { GATag } from '@src/components/GATag';
import { OGPSetting } from '@src/components/OGPSetting';
import { theme } from '@src/constants/theme';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render = (): JSX.Element => (
    <Html lang="en">
      <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# profile: http://ogp.me/ns/profile#">
        <GATag />
        <OGPSetting />

        <meta name="description" content="About 8ayac(Yoshinori Hayashi)" />
        <meta name="author" content="Yoshinori Hayashi" />

        <meta charSet="utf-8" />
        <meta name="theme-color" content={theme.color.yellow.base} />
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${config.siteRoot}/img/favicon.png`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
