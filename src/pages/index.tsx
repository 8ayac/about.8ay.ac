import history from '@.contents/history.json';
import { AchievementsSection } from '@src/components/AchievementsSection';
import { EducationSection } from '@src/components/EducationSection';
import { OtherActivitiesSection } from '@src/components/OtherActivitiesSection';
import { PersonalActivitiesSection } from '@src/components/PersonalActivitiesSection';
import { PresentationsSection } from '@src/components/PresentationsSection';
import { PublicationsSection } from '@src/components/PublicationsSection';
import { SiteHeader } from '@src/components/SiteHeader';
import { WorkExperiencesSection } from '@src/components/WorkExperiencesSection';
import {
  AchievementHistory,
  EducationalHistory,
  OtherHistory,
  PersonalHistory,
  PresentationHistory,
  PublicationHistory,
  WorkHistory,
} from '@src/types';
import { NextPage } from 'next';
import React from 'react';

const Page: NextPage = () => {
  const histories = history;

  return (
    <>
      <SiteHeader />
      <WorkExperiencesSection
        workExperiences={histories.work as WorkHistory[]}
      />
      <EducationSection
        educations={histories.educations as EducationalHistory[]}
      />
      <AchievementsSection
        achievements={histories.achievement as AchievementHistory[]}
      />
      <OtherActivitiesSection
        otherActivities={histories.others as OtherHistory[]}
      />
      <PersonalActivitiesSection
        personalActivities={histories.personal as PersonalHistory[]}
      />
      <PublicationsSection
        publications={histories.publications as PublicationHistory[]}
      />
      <PresentationsSection
        presentations={histories.presentations as PresentationHistory[]}
      />
    </>
  );
};

export default Page;
