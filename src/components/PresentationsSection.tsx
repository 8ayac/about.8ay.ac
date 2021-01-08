import { PresentationExperience } from '@src/types';
import Image from 'next/image';
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
                <a href={presentation.url}>
                  <Image
                    src={
                      presentation.imagePath.startsWith('/')
                        ? presentation.imagePath
                        : `/${presentation.imagePath}`
                    }
                    alt={presentation.title}
                    width="auto"
                    height="auto"
                  />
                </a>
                <p>{presentation.title}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
