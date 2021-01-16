import { Body } from '@src/components/ExperienceEntry/Body';
import { BodyWithThumbnail } from '@src/components/ExperienceEntry/BodyWithThumbnail';
import { entryBody, entryWrapper } from '@src/components/ExperienceEntry/style';
import {
  Experience,
  ExperienceWithImage,
  implementsExperienceWithImage,
} from '@src/types';
import { getExperienceTitle } from '@src/utils/helper';
import React from 'react';

export const ExperienceEntry: React.FC<{
  experience: Experience | ExperienceWithImage;
}> = (props) => {
  const { experience } = props;
  const withThumbnail: boolean = implementsExperienceWithImage(experience);

  return (
    <div css={entryWrapper(withThumbnail)}>
      <div css={entryBody(withThumbnail)}>
        {implementsExperienceWithImage(experience) ? ( // 条件部にwithThumbnailを使いたいがTS2322のエラーが出るため無理 TODO: 調査
          <BodyWithThumbnail
            date={experience.date}
            url={experience.url}
            imagePath={experience.imagePath}
            description={experience.title}
          />
        ) : (
          <Body
            title={getExperienceTitle(experience)}
            date={experience.date}
            summaries={experience.summaries}
            references={experience.references}
          />
        )}
      </div>
    </div>
  );
};
