import React from 'react';

export const GATag: React.FC = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-FKE0D8V7SQ"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FKE0D8V7SQ');`,
      }}
    />
  </>
);
