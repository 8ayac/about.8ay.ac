import experiences from '@.contents/experiences.json';
import { AchievementsSection } from '@src/components/AchievementsSection';
import { EducationSection } from '@src/components/EducationSection';
import { OtherActivitiesSection } from '@src/components/OtherActivitiesSection';
import { PersonalActivitiesSection } from '@src/components/PersonalActivitiesSection';
import { PresentationsSection } from '@src/components/PresentationsSection';
import { PublicationsSection } from '@src/components/PublicationsSection';
import { SiteHeader } from '@src/components/SiteHeader';
import { WorkExperiencesSection } from '@src/components/WorkExperiencesSection';
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
      <WorkExperiencesSection workExperiences={exp.work as WorkExperience[]} />
      <EducationSection
        educations={exp.educations as EducationalExperience[]}
      />
      <AchievementsSection
        achievements={exp.achievement as AchievementExperience[]}
      />
      <OtherActivitiesSection
        otherActivities={exp.others as OtherExperience[]}
      />
      <PersonalActivitiesSection
        personalActivities={exp.personal as PersonalExperience[]}
      />
      <PublicationsSection
        publications={exp.publications as PublicationExperience[]}
      />
      <PresentationsSection
        presentations={exp.presentations as PresentationExperience[]}
      />
    </>
  );
};

export default Page;
