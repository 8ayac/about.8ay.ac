import allExperiences from '@.contents/experiences.json';
import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { ExperienceEntryWithThumbnail } from '@src/components/ExperienceEntryWithThumbnail';
import { ExperienceField } from '@src/components/ExperienceField';
import { Experience } from '@src/types';
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

export const ExperienceList: React.FC = () => {
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
      type: 'cves',
      title: 'CVEs',
      data: experiences.cves,
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
      {expWithMetaForRendering.map((exp, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <section key={idx} className={exp.type}>
          <ExperienceField
            name={exp.title}
            entries={getExperienceEntries(exp.data, exp.withThumbnail)}
            withThumbnail={exp.withThumbnail}
          />
        </section>
      ))}
    </>
  );
};
