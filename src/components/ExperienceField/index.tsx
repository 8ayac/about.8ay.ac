import { ProfileField } from '@src/components/ProfileField';
import React from 'react';

export const ExperienceField: React.FC<{
  name: string;
  entries: React.ReactNode;
  withThumbnail?: boolean;
}> = (props) => {
  const { name, entries, withThumbnail } = props;

  return (
    <>
      <ProfileField name={name} child={entries} withThumbnail={withThumbnail} />
    </>
  );
};
