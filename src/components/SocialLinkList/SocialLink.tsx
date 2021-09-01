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
import {
  socialIcon,
  socialLink,
} from '@src/components/SocialLinkList/style';
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

export const SocialLink: React.FC<{ social: SocialInformation }> = (props) => {
  const { social } = props;

  return (
    <a css={socialLink} href={social.url}>
      <FontAwesomeIcon css={socialIcon} icon={getSocialIcon(social.url)} />
      {social.description}
    </a>
  );
};
