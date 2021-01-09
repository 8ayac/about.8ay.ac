import React from 'react';

export const ExperienceField: React.FC<{
  name: string;
  experienceEntries: React.ReactNode;
}> = (props) => {
  const { name, experienceEntries } = props;

  return (
    <>
      <h2>{name}</h2>
      <div className="experience-entries">{experienceEntries}</div>
    </>
  );
};
