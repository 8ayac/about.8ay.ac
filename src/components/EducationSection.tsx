import { ExperienceEntry } from '@src/components/ExperienceEntry';
import { EducationalHistory } from '@src/types';
import React from 'react';

export const EducationSection: React.FC<{
  educations: EducationalHistory[];
}> = (props) => {
  const { educations } = props;

  return (
    <>
      <section className="educations">
        <h2>Education</h2>
        {educations.map((exp, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`education-${idx}`} className="experience-entry">
            <ExperienceEntry
              title={[
                exp.degree,
                exp.department,
                exp.faculty,
                exp.school,
                exp.location,
              ]
                .filter((v) => v)
                .join(', ')}
              time={exp.date}
            />
          </div>
        ))}
      </section>
    </>
  );
};
