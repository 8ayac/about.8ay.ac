import { ThumbnailDescription } from '@src/components/ExperienceEntry/ThumbnailDescription';
import { TimeStamp } from '@src/components/ExperienceEntry/TimeStamp';
import { ImageLink } from '@src/components/ImageLink';
import { ExperienceDate } from '@src/types';
import React from 'react';

export const BodyWithThumbnail: React.FC<{
  date: ExperienceDate;
  url: string;
  imagePath: string;
  description: string;
}> = ({ date, imagePath, url, description }) => (
  <>
    <TimeStamp time={date} />
    <ImageLink url={url} imagePath={imagePath} alt={description} />
    <ThumbnailDescription text={description} />
  </>
);
