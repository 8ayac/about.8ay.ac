import React from 'react';

export const ProfileField: React.FC<{
  name: string;
  child: React.ReactNode;
}> = (props) => {
  const { name, child } = props;

  return (
    <>
      <h2>{name}</h2>
      <div className="profile-field">{child}</div>
    </>
  );
};
