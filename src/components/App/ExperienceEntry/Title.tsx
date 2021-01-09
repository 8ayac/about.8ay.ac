import React from 'react';

export const Title: React.FC<{ title: string }> = (props) => {
  const { title } = props;
  return <h3>{title}</h3>;
};
