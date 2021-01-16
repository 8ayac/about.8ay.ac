import { description } from '@src/components/ExperienceEntry/style';
import React from 'react';

export const ThumbnailDescription: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  return <p css={description}>{text}</p>;
};
