import { ProfileField } from '@src/components/shared/ProfileField';
import React from 'react';

export const ExperienceField: React.FC<{
  name: string;
  entries: React.ReactNode;
}> = (props) => {
  const { name, entries } = props;

  return (
    <>
      <ProfileField name={name} child={entries} />
    </>
  );
};
