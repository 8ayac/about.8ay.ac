import { LinkWithDescription } from '@src/types';
import { toDateStringForPresentation, toTermString } from '@src/utils/helper';
import React from 'react';

type Term = [start: string, end: string | undefined];

export const ExperienceEntry: React.FC<{
  title: string;
  summaries?: string[];
  references?: LinkWithDescription[];
  time: string | Term;
}> = (props) => {
  const { title, summaries, references, time } = props;

  return (
    <div className="experience-entry">
      <div className="experience-body">
        <h3>{title}</h3>
        <ul>
          {summaries &&
            summaries.map((summary, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`summary-${idx}`}>{summary}</li>
            ))}
          {references &&
            references.map((source, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`ref-${idx}`}>
                Reference:
                <a href={source.url}>
                  {source.description ? source.description : source.url}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <i>
        {typeof time === 'string'
          ? toDateStringForPresentation(time)
          : toTermString(time[0], time[1])}
      </i>
    </div>
  );
};
