import {
  fieldBody,
  fieldName,
  wrapper,
} from '@src/components/ProfileFieldWithThumbnail/style';
import React from 'react';

export const ProfileFieldWithThumbnail: React.FC<{
  name: string;
  child: React.ReactNode;
}> = (props) => {
  const { name, child } = props;

  return (
    <>
      <div css={wrapper}>
        <h2 css={fieldName}>{name}</h2>
        <div css={fieldBody}>{child}</div>
      </div>
    </>
  );
};
