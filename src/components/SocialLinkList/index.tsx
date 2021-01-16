import { SocialLink } from '@src/components/SocialLinkList/SocialLink';
import { linkListWrapper } from '@src/components/SocialLinkList/style.tsx';
import { SocialInformation } from '@src/types';
import React from 'react';

export const SocialLinkList: React.FC<{ socials: SocialInformation[] }> = (
  props
) => {
  const { socials } = props;

  return (
    <>
      <div css={linkListWrapper}>
        {socials.map((social: SocialInformation, idx: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <SocialLink key={idx} social={social} />
        ))}
      </div>
    </>
  );
};
