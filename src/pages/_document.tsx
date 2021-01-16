import { config } from '@site.config';
import { OGPSetting } from '@src/components/OGPSetting';
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
    <Html>
      <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# profile: http://ogp.me/ns/profile#">
        <OGPSetting />

        <meta name="description" content="About 8ayac" />
        <meta name="author" content="Yoshinori Hayashi" />

        <meta charSet="utf-8" />
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${config.siteRoot}/img/favicon.ico`}
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
