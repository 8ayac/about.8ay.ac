import {
  fieldBody,
  fieldName,
  wrapper,
} from '@src/components/ProfileField/style';
import React from 'react';

export const ProfileField: React.FC<{
  name: string;
  child: React.ReactNode;
  withThumbnail?: boolean;
}> = (props) => {
  const { name, child, withThumbnail } = props;

  return (
    <>
      <div css={wrapper}>
        <h2 css={fieldName} id={name}>
          {name}
        </h2>
        <div css={fieldBody(withThumbnail ?? false)}>{child}</div>
      </div>
    </>
  );
};
