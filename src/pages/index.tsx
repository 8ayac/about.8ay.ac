import allExperiences from '@.contents/experiences.json';
import { ExperienceEntry } from '@src/components/App/ExperienceEntry';
import { ExperienceField } from '@src/components/App/ExperienceField';
import { PresentationsSection } from '@src/components/App/PresentationsSection';
import { SiteHeader } from '@src/components/App/SiteHeader';
import { Experience, PresentationExperience } from '@src/types';
import { getExperienceTitle } from '@src/utils/helper';
import { NextPage } from 'next';
import React from 'react';

const getExperienceEntries = (exp: (Experience & any)[]) => {
  return exp.map((v) => (
    <>
      <ExperienceEntry
        title={getExperienceTitle(v)}
        summaries={v.summaries}
        references={v.references}
        time={v.date}
      />
    </>
  ));
};

const Page: NextPage = () => {
  const experiences = allExperiences;
  const expWithMetaForRendering = [
    { type: 'work', title: 'Work Experience', data: experiences.work },
    { type: 'education', title: 'Education', data: experiences.educations },
    {
      type: 'achievement',
      title: 'Awards & Achievement',
      data: experiences.achievement,
    },
    { type: 'others', title: 'Other Activities', data: experiences.others },
    {
      type: 'personal',
      title: 'Personal Activities',
      data: experiences.personal,
    },
    {
      type: 'publications',
      title: 'Publications',
      data: experiences.publications,
    },
  ];

  return (
    <>
      <SiteHeader />

      {expWithMetaForRendering.map((v, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <section key={idx} className={v.type}>
          <ExperienceField
            name={v.title}
            entries={getExperienceEntries(v.data)}
          />
        </section>
      ))}

      <PresentationsSection
        presentations={experiences.presentations as PresentationExperience[]}
      />
    </>
  );
};

export default Page;
