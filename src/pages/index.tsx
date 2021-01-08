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
  const histories = experiences;

  return (
    <>
      <SiteHeader />
      <WorkExperiencesSection
        workExperiences={histories.work as WorkExperience[]}
      />
      <EducationSection
        educations={histories.educations as EducationalExperience[]}
      />
      <AchievementsSection
        achievements={histories.achievement as AchievementExperience[]}
      />
      <OtherActivitiesSection
        otherActivities={histories.others as OtherExperience[]}
      />
      <PersonalActivitiesSection
        personalActivities={histories.personal as PersonalExperience[]}
      />
      <PublicationsSection
        publications={histories.publications as PublicationExperience[]}
      />
      <PresentationsSection
        presentations={histories.presentations as PresentationExperience[]}
      />
    </>
  );
};

export default Page;
