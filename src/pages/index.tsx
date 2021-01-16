import { ExperienceList } from '@src/widgets/ExperienceList';
import { SiteFooter } from '@src/widgets/SiteFooter';
import { SiteHeader } from '@src/widgets/SiteHeader';
import { NextPage } from 'next';
import React from 'react';

const Page: NextPage = () => {
  return (
    <>
      <SiteHeader />
      <ExperienceList />
      <SiteFooter />
    </>
  );
};

export default Page;
