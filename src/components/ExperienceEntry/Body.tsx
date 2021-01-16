import { BulletedDescription } from '@src/components/ExperienceEntry/BulletedDescription';
import { TimeStamp } from '@src/components/ExperienceEntry/TimeStamp';
import { Title } from '@src/components/ExperienceEntry/Title';
import { ExperienceDate, LinkWithDescription } from '@src/types';
import React from 'react';

export const Body: React.FC<{
  title: string;
  date: ExperienceDate;
  summaries?: string[];
  references?: LinkWithDescription[];
}> = ({ title, date, summaries, references }) => (
  <>
    <Title title={title} />
    <TimeStamp time={date} floatRight />
    <BulletedDescription summaries={summaries} references={references} />
  </>
);
