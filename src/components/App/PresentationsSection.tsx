import { ImageLink } from '@src/components/shared/ImageLink';
import { PresentationExperience } from '@src/types';
import React from 'react';

export const PresentationsSection: React.FC<{
  presentations: PresentationExperience[];
}> = (props) => {
  const { presentations } = props;

  return (
    <>
      <section className="work-experiences">
        <h2>Presentations</h2>
        {presentations.map((presentation, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`presentation-${idx}`} className="experience-entry">
            <div className="works-entry">
              <div className="works-body">
                <ImageLink
                  url={presentation.url}
                  imagePath={presentation.imagePath}
                  alt={presentation.title}
                />
                <p>{presentation.title}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
