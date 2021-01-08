import socials from '@.contents/social.json';
import { config } from '@site.config';
import { SocialLinks } from '@src/components/SocialLinks';
import { SocialInformation } from '@src/types';
import React from 'react';

export const SiteHeader: React.FC = () => (
  <header>
    <h1>{config.siteMeta.title}</h1>
    <section className="social">
      <SocialLinks socials={socials as SocialInformation[]} />
    </section>
  </header>
);
