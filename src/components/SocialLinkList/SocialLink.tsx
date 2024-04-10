import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {socialIcon, socialLink,} from '@src/components/SocialLinkList/style';
import {SocialInformation} from '@src/types';
import React from 'react';
import {faGithub, faLinkedin, faXTwitter, faBluesky, IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBlog, faLink} from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faBlog, faTwitter, faLinkedin, faLink)

const getSocialIcon = (url: string): IconDefinition => {
  switch (true) {
    case /^https?:\/\/github\.com\//.test(url):
      return faGithub;
    case /^https?:\/\/.+?.hatenablog\.com/.test(url):
      return faBlog;
    case /^https?:\/\/x.com\//.test(url):
      return faXTwitter;
    case /^https:\/\/bsky\.app\//.test(url):
      return faBluesky;
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
