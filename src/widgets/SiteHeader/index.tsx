import socials from '@.contents/social.json';
import { config } from '@site.config';
import { SocialLinkList } from '@src/components/SocialLinkList';
import { SocialInformation } from '@src/types';
import { header, siteTitle } from '@src/widgets/SiteHeader/style';
import React from 'react';

export const SiteHeader: React.FC = () => (
  <header css={header}>
    <h1 css={siteTitle}>{config.siteMeta.title}</h1>
    <SocialLinkList socials={socials as SocialInformation[]} />
  </header>
);
