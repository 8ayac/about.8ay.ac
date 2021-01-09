import { ProfileField } from '@src/components/shared/ProfileField';
import React from 'react';

export const ExperienceField: React.FC<{
  name: string;
  experienceEntries: React.ReactNode;
}> = (props) => {
  const { name, experienceEntries } = props;

  return (
    <>
      <ProfileField name={name} child={experienceEntries} />
    </>
  );
};
