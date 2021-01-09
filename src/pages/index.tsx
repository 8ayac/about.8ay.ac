import allExperiences from '@.contents/experiences.json';
import { ExperienceEntry } from '@src/components/App/ExperienceEntry';
import { ExperienceEntryWithThumbnail } from '@src/components/App/ExperienceEntryWithThumbnail';
import { ExperienceField } from '@src/components/App/ExperienceField';
import { SiteHeader } from '@src/components/App/SiteHeader';
import { Experience } from '@src/types';
import { NextPage } from 'next';
import React from 'react';

const getExperienceEntries = (
  experiences: (Experience & any)[],
  withThumbnail: boolean
) => {
  return experiences.map((exp) => (
    <>
      {!withThumbnail ? (
        <ExperienceEntry experience={exp} />
      ) : (
        <ExperienceEntryWithThumbnail experience={exp} />
      )}
    </>
  ));
};

const Page: NextPage = () => {
  const experiences = allExperiences;
  const expWithMetaForRendering = [
    {
      type: 'work',
      title: 'Work Experience',
      data: experiences.work,
      withThumbnail: false,
    },
    {
      type: 'education',
      title: 'Education',
      data: experiences.educations,
      withThumbnail: false,
    },
    {
      type: 'achievement',
      title: 'Awards & Achievement',
      data: experiences.achievement,
      withThumbnail: false,
    },
    {
      type: 'others',
      title: 'Other Activities',
      data: experiences.others,
      withThumbnail: false,
    },
    {
      type: 'personal',
      title: 'Personal Activities',
      data: experiences.personal,
      withThumbnail: false,
    },
    {
      type: 'publications',
      title: 'Publications',
      data: experiences.publications,
      withThumbnail: false,
    },
    {
      type: 'presentation',
      title: 'Presentations',
      data: experiences.presentations,
      withThumbnail: true,
    },
  ];

  return (
    <>
      <SiteHeader />

      {expWithMetaForRendering.map((exp, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <section key={idx} className={exp.type}>
          <ExperienceField
            name={exp.title}
            entries={getExperienceEntries(exp.data, exp.withThumbnail)}
          />
        </section>
      ))}
    </>
  );
};

export default Page;
