import experiences from '@.contents/experiences.json';

import { AchievementExperienceField } from '@src/components/App/AchievementExperienceField';
import { EducationExperienceField } from '@src/components/App/EducationExperienceField';
import { OtherExperienceField } from '@src/components/App/OtherExperienceField';
import { PersonalExperienceField } from '@src/components/App/PersonalExperienceField';
import { PresentationsSection } from '@src/components/App/PresentationsSection';
import { PublicationExperienceField } from '@src/components/App/PublicationExperienceField';
import { SiteHeader } from '@src/components/App/SiteHeader';
import { WorkExperienceField } from '@src/components/App/WorkExperienceField';
import {
  AchievementExperience,
  EducationalExperience,
  OtherExperience,
  PersonalExperience,
  PresentationExperience,
  PublicationExperience,
  WorkExperience,
} from '@src/types';
import { NextPage } from 'next';
import React from 'react';

const Page: NextPage = () => {
  const exp = experiences;

  return (
    <>
      <SiteHeader />

      <section className="work">
        <WorkExperienceField workExperiences={exp.work as WorkExperience[]} />
      </section>

      <section className="education">
        <EducationExperienceField
          educations={exp.educations as EducationalExperience[]}
        />
      </section>

      <section className="achievements">
        <AchievementExperienceField
          achievements={exp.achievement as AchievementExperience[]}
        />
      </section>

      <section className="others">
        <OtherExperienceField
          otherActivities={exp.others as OtherExperience[]}
        />
      </section>

      <section className="personal">
        <PersonalExperienceField
          personalActivities={exp.personal as PersonalExperience[]}
        />
      </section>

      <section className="publications">
        <PublicationExperienceField
          publications={exp.publications as PublicationExperience[]}
        />
      </section>

      <PresentationsSection
        presentations={exp.presentations as PresentationExperience[]}
      />
    </>
  );
};

export default Page;
