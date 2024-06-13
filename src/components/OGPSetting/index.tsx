import { config } from '@site.config';
import React from 'react';

export const OGPSetting: React.FC = () => {
  return (
    <>
      <meta property="og:title" content="about.8ay.ac" />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content="https://about.8ay.ac" />
      <meta
        property="og:image"
        content={`${config.siteRoot}/img/favicon.png`}
      />

      <meta property="og:site_name" content="About 8ayac" />
      <meta
        property="og:description"
        content="Official information about 8ayac"
      />

      <meta property="profile:first_name" content="Yoshinori" />
      <meta property="profile:last_name" content="Hayashi" />
      <meta property="profile:username" content="8ayac" />
      <meta property="profile:gender" content="male" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@8ayac" />
      <meta name="twitter:player" content="@8ayac" />
    </>
  );
};
