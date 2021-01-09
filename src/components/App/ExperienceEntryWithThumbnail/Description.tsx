import React from 'react';

export const Description: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};
