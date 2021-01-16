import { entryTitle } from '@src/components/App/ExperienceEntry/style';
import React from 'react';

export const Title: React.FC<{ title: string }> = (props) => {
  const { title } = props;
  return <h3 css={entryTitle}>{title}</h3>;
};
