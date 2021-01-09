import { Description } from '@src/components/App/ExperienceEntryWithThumbnail/Description';
import { ImageLink } from '@src/components/shared/ImageLink';
import { Experience } from '@src/types';
import React from 'react';

export const ExperienceEntryWithThumbnail: React.FC<{
  experience: (Experience & { title: string; url: string; imagePath: string }) &
    any;
}> = (props) => {
  const { experience } = props;

  return (
    <div className="experience-entry">
      <div className="experience-body">
        <ImageLink
          url={experience.url}
          imagePath={experience.imagePath}
          alt={experience.title}
        />
        <Description text={experience.title} />
      </div>
    </div>
  );
};
