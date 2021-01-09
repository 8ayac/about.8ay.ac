import { LinkWithDescription } from '@src/types';
import React from 'react';

export const Descriptions: React.FC<{
  summaries?: string[];
  references?: LinkWithDescription[];
}> = (props) => {
  const { summaries, references } = props;

  return (
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
  );
};
