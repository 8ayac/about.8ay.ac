import { description } from '@src/components/ExperienceEntryWithThumbnail/style';
import React from 'react';

export const Description: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  return <p css={description}>{text}</p>;
};
