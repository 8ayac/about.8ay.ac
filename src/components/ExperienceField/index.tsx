import { ProfileField } from '@src/components/ProfileField';
import { ProfileFieldWithThumbnail } from '@src/components/ProfileFieldWithThumbnail';
import React from 'react';

export const ExperienceField: React.FC<{
  name: string;
  entries: React.ReactNode;
  withThumbnail?: boolean;
}> = (props) => {
  const { name, entries, withThumbnail } = props;

  return (
    <>
      {withThumbnail ? (
        <ProfileFieldWithThumbnail name={name} child={entries} />
      ) : (
        <ProfileField name={name} child={entries} />
      )}
    </>
  );
};
