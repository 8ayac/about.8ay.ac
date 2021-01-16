import {
  descriptionItem,
  descriptionList,
} from '@src/components/ExperienceEntry/style';
import { LinkWithDescription } from '@src/types';
import React from 'react';

export const Descriptions: React.FC<{
  summaries?: string[];
  references?: LinkWithDescription[];
}> = (props) => {
  const { summaries, references } = props;

  return (
    <ul css={descriptionList}>
      {summaries &&
        summaries.map((summary, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`summary-${idx}`} css={descriptionItem}>
            {summary}
          </li>
        ))}
      {references &&
        references.map((source, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`ref-${idx}`} css={descriptionItem}>
            Reference:
            <a href={source.url}>
              {source.description ? source.description : source.url}
            </a>
          </li>
        ))}
    </ul>
  );
};
