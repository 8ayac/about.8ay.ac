import socials from '@.contents/social.json';
import { config } from '@site.config';
import { siteTitle, header } from '@src/components/App/SiteHeader/style';
import { SocialLinkList } from '@src/components/App/SocialLinkList';
import { SocialInformation } from '@src/types';
import React from 'react';

export const SiteHeader: React.FC = () => (
  <header css={header}>
    <h1 css={siteTitle}>{config.siteMeta.title}</h1>
    <SocialLinkList socials={socials as SocialInformation[]} />
  </header>
);
