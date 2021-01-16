import { footer, ga } from '@src/widgets/SiteFooter/style';
import React from 'react';

export const SiteFooter: React.FC = () => (
  <footer css={footer}>
    <p>© 2021 about.8ay.ac All Rights Reserved.</p>
    <p css={ga}>
      This website uses Google Analytics, a web analytics service by Google.
      Google Analytics uses cookies, which are placed on your computer to help
      the website analyze how you use the site. You can prevent the the
      collection of your data by disabling cookies in your browser.
    </p>
  </footer>
);
