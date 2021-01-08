import {
  faGithub,
  faLinkedin,
  faTwitter,
  IconDefinition,
} from '@node_modules/@fortawesome/free-brands-svg-icons';
import {
  faBlog,
  faLink,
} from '@node_modules/@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@node_modules/@fortawesome/react-fontawesome';
import { SocialInformation } from '@src/types';
import React from 'react';

const getSocialIcon = (url: string): IconDefinition => {
  switch (true) {
    case /^https?:\/\/github\.com\//.test(url):
      return faGithub;
    case /^https?:\/\/.+?.hatenablog\.com/.test(url):
      return faBlog;
    case /^https?:\/\/twitter.com\//.test(url):
      return faTwitter;
    case /^https?:\/\/www\.linkedin\.com\//.test(url):
      return faLinkedin;
    default:
      return faLink;
  }
};

export const SocialLinks: React.FC<{ socials: SocialInformation[] }> = (
  props
) => {
  const { socials } = props;
  return (
    <>
      {socials.map((social: SocialInformation, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <a key={`social-${idx}`} href={social.url}>
          <FontAwesomeIcon icon={getSocialIcon(social.url)} />
          {social.description}
        </a>
      ))}
    </>
  );
};
