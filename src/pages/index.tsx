import { ExperienceList } from '@src/widgets/ExperienceList';
import { SiteHeader } from '@src/widgets/SiteHeader';
import { NextPage } from 'next';
import React from 'react';

const Page: NextPage = () => {
  return (
    <>
      <SiteHeader />
      <ExperienceList />
    </>
  );
};

export default Page;
